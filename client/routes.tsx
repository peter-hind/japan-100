import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import CompleteProfile from './components/CompleteProfile'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/complete-profile" element={<CompleteProfile />} />
  </Route>
)
