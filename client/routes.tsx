import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import MountainDetails from './components/MountainDetails'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/mountains100/" element={<MountainDetails />} />
  </Route>
)
