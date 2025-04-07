
  import React from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/signup' element = {<SignUp />} />
    <Route path='/signin' element = {<SignIn />} />
    <Route path='/dashboard' element = {<Dashboard />} />
    {/* <Route path='/signup' element = {<Signup />} />
    <Route path='/signup' element = {<Signup />} /> */}

  </Routes>

  </BrowserRouter>
  )
}

export default App