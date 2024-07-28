import { Routes, Route, useLocation } from 'react-router-dom'

import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import { Toaster } from "@/components/ui/toaster"
import Landing from './landing/Landing';
import { useEffect } from 'react';
import PrivateRoute from './components/PrivateRoute';

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, {
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
    <main className='flex'>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>


        {/* Private Routes */}
        {<PrivateRoute>
          <Route path='/app' element={<div>App</div>} />
        </PrivateRoute>}

      </Routes>
      <Toaster />
    </main>
  )
}


export default App