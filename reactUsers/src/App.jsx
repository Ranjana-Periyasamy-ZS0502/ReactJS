import './App.css'
import UsersList from './UsersDirectory/UsersList'
import UserDetails from './UsersDirectory/UserDetails.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  )
}

export default App
