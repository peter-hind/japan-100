export interface User {
  id: number
  auth0Id: string
  username: string
  firstName: string
  surname: string
  location: string
  picture: string
  email: string
}

export interface UserData {
  client_id: string
  email: string
  password: string
  connection: string
}

export interface UserForm {
  email: string
  password: string
  picture: string
  username: string
  firstName: string
  surname: string
  location: string
}

export interface Profile {
  username: string
  firstName: string
  surname: string
  email: string
  location: string
  picture: string
}

export interface UserSnakeCase {
  id?: number
  auth0_id: string
  username: string
  first_name: string
  surname: string
  location: string
  picture: string
  email: string
}
