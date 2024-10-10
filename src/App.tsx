import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <ul className='flex h-full gap-4 justify-center items-center'>
      <li className='text-black text-xl'>
        <Link to='/doctor-register' className='hover:text-sky-500'>
          DOCTOR
        </Link>
      </li>
      <li className='text-black text-xl'>
        <Link to='/patient-register' className='hover:text-sky-500'>
          PACIENTE
        </Link>
      </li>
    </ul>
  )
}

export default App
