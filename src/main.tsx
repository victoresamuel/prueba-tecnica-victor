import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { action as doctorAction } from './pages/DoctorRegister.tsx'
import { action as patientAction } from './pages/PatientRegister.tsx'
import { action as patientDateAction } from './pages/PatientHome.tsx'

import DoctorRegister from './pages/DoctorRegister.tsx'
import DoctorLogin from './pages/DoctorLogin.tsx'
import PatientRegister from './pages/PatientRegister.tsx'
import PatientLogin from './pages/PatientLogin.tsx'
import PatientHome from './pages/PatientHome.tsx'
import AdminLogin from './pages/AdminLogin.tsx'
import AdminRequests from './pages/AdminRequests.tsx'
import AdminPanel from './pages/AdminPanel.tsx'
import AdminData from './pages/AdminData.tsx'
import DoctorHome from './pages/DoctorHome.tsx'

import App from './App.tsx'
import './index.css'
import AdminExport from './pages/AdminExport.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/doctor-register',
    element: <DoctorRegister />,
    action: doctorAction,
  },
  {
    path: '/doctor-login',
    element: <DoctorLogin />,
  },
  {
    path: '/doctor/home',
    element: <DoctorHome />,
  },
  {
    path: '/patient-register',
    element: <PatientRegister />,
    action: patientAction,
  },
  {
    path: '/patient-login',
    element: <PatientLogin />,
  },
  {
    path: '/patient/home',
    element: <PatientHome />,
    action: patientDateAction,
  },
  {
    path: '/admin',
    element: <AdminLogin />,
  },
  {
    path: '/admin/panel',
    element: <AdminPanel />,
    children: [
      {
        path: '/admin/panel/requests',
        element: <AdminRequests />,
      },
      {
        path: '/admin/panel/data',
        element: <AdminData />,
      },
      {
        path: '/admin/panel/export',
        element: <AdminExport />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
