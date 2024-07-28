import { Routes, Route } from 'react-router-dom'

import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import { Toaster } from "@/components/ui/toaster"
import Landing from './_landing/Landing';


export const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>


        {/* Private Routes */}
        {/* <Route element={<RootLayout/>}>
            
            </Route> */}

      </Routes>
      <Toaster />
    </main>
  )
}


export default App