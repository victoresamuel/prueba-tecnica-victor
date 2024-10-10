import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <ul className='flex h-full gap-4 justify-center items-center'>
      <li className='text-black'>
        <Link to='/doctor-register'>DOCTOR</Link>
      </li>
      <li className='text-black'>
        <Link to='/patient-register'>PATIENT</Link>
      </li>
    </ul>
  )
}

export default App
