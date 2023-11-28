import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import CompleteProfile from './components/CompleteProfile'
import ListView from './components/ListView'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage mapView={true} listView={false} />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/complete-profile" element={<CompleteProfile />} />
    <Route
      path="/list-view"
      element={<HomePage mapView={false} listView={true} />}
    />
  </Route>
)
