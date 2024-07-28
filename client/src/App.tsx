import { Routes, Route, useLocation } from 'react-router-dom'

import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import { Toaster } from "@/components/ui/toaster"
import Landing from './landing/Landing';
import { useEffect } from 'react';

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname + location.search,
      });
    } else {
      console.warn('gtag function is not available');
    }
  }, [location]);
};


export const App = () => {
  useAnalytics();

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

function gtag(arg0: string, arg1: string, arg2: { page_path: string; }) {
  throw new Error('Function not implemented.');
}
