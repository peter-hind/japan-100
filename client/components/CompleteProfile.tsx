import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { completeProfile, getAllUsers } from '../api/apiClient'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Profile } from '../../models/users'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import ImageGrid from './ImageGrid'

const initialForm = {
  username: '',
  picture: '',
  firstName: '',
  surname: '',
  location: '',
  email: '',
}

let currentForm: Profile
function CompleteProfile() {
  const [form, setForm] = useState<Profile>(initialForm)
  const [submit, setSubmit] = useState(false)
  const navigate = useNavigate()
  const { user } = useAuth0()
  const queryClient = useQueryClient()
  console.log(user)
  const completeProfileMutation = useMutation({
    mutationFn: () => completeProfile(user?.sub as string, form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  const {
    data: allProfiles,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['users'], queryFn: () => getAllUsers() })
  if (isError) {
    return <div>There was an error getting all profiles...</div>
  }

  if (!allProfiles || isLoading) {
    return <div>Loading all profiles...</div>
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  function handleImageSelect(selectedImage: Image) {
    setForm((prevForm) => ({
      ...prevForm,
      picture: selectedImage.url,
    }))
    console.log(form)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    currentForm = { ...form }
    completeProfileMutation.mutate()
    setSubmit(true)
  }

  function handleRedirect(event: any) {
    navigate('/')
  }

  const avatars = [
    { id: 1, url: '/image/avatars/avatar1.png', alt: 'Avatar 1' },
    { id: 2, url: '/image/avatars/avatar2.png', alt: 'Avatar 2' },
    { id: 3, url: '/image/avatars/avatar3.png', alt: 'Avatar 3' },
    { id: 4, url: '/image/avatars/avatar4.png', alt: 'Avatar 4' },
    { id: 5, url: '/image/avatars/avatar5.png', alt: 'Avatar 5' },
    { id: 6, url: '/image/avatars/avatar6.png', alt: 'Avatar 6' },
    { id: 7, url: '/image/avatars/avatar7.png', alt: 'Avatar 7' },
    { id: 8, url: '/image/avatars/avatar8.png', alt: 'Avatar 8' },
    { id: 9, url: '/image/avatars/avatar9.png', alt: 'Avatar 9' },
    { id: 10, url: '/image/avatars/avatar10.png', alt: 'Avatar 10' },
    { id: 11, url: '/image/avatars/avatar11.png', alt: 'Avatar 11' },
    { id: 12, url: '/image/avatars/avatar12.png', alt: 'Avatar 12' },
    { id: 13, url: '/image/avatars/avatar13.png', alt: 'Avatar 13' },
    { id: 14, url: '/image/avatars/avatar14.png', alt: 'Avatar 14' },
    { id: 15, url: '/image/avatars/avatar15.png', alt: 'Avatar 15' },
    { id: 16, url: '/image/avatars/avatar16.png', alt: 'Avatar 16' },
  ]

  return (
    <>
      <h1 className="mx-auto mt-12">COMPLETE YOUR PROFILE</h1>
      {!allProfiles.some((user) => user.username === currentForm?.username) ? (
        <form onSubmit={handleSubmit} className="form-layout">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            required
            placeholder="Username"
            name="username"
            onChange={handleChange}
            className="form-input"
          />
          {allProfiles.some((user) => user.username === form.username) ? (
            <p className="form-warning">Username already exists</p>
          ) : null}
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            required
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            className="form-input"
          />
          <label htmlFor="surname">Surname</label>
          <input
            id="surname"
            required
            type="text"
            placeholder="Surname"
            name="surname"
            onChange={handleChange}
            className="form-input"
          />
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            required
            placeholder="Location"
            name="location"
            onChange={handleChange}
            className="form-input"
          />
          <h2>Choose an Avatar</h2>
          <ImageGrid images={avatars} onSelect={handleImageSelect} />

          {!allProfiles.some((user) => user.username === form.username) ? (
            <button type="submit" className="login-button">
              Submit
            </button>
          ) : null}
        </form>
      ) : null}
      {submit &&
      allProfiles.some((user) => user.username === currentForm.username) ? (
        <div className="signup-success">
          <h2 className="text-center">
            Thank you for completing your profile!
          </h2>

          <button className="login-button" onClick={handleRedirect}>
            Home
          </button>
        </div>
      ) : null}
    </>
  )
}

export default CompleteProfile
