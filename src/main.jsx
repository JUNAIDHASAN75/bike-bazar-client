import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './Router/Route';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-white'>
      <div className='max-w-screen-2xl mx-auto'>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </div>
  </React.StrictMode>
)
