import { Form } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { states, specialtys } from '../data'

export async function action() {
  const form: HTMLFormElement = document.querySelector('#form')!
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)

  const response = await fetch('http://localhost:3000/solicitudes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  alert('Su solicitud ha sido enviada y esta pendiente por confirmacion')
  return response.json()
}

function DoctorRegister() {
  return (
    <Form
      id='form'
      method='post'
      className='flex flex-col h-full items-center justify-center'
    >
      <h2 className='font-bold'>FORMULARIO DE REGISTRO (DOCTOR)</h2>
      <div className='flex flex-col gap-2'>
        <label htmlFor='name'>Nombre</label>
        <input
          type='text'
          name='name'
          required
          className='border border-black'
        />
        <label htmlFor='lastname'>Apellido</label>
        <input
          type='text'
          name='lastname'
          required
          className='border border-black'
        />
        <label htmlFor='specialty'>Especialidad</label>
        <select
          required
          name='specialty'
          id='specialty'
          className='border border-black'
        >
          {specialtys.map((specialty) => (
            <option value={specialty}>{specialty}</option>
          ))}
        </select>
        <label htmlFor='location'>Ubicacion</label>
        <select name='location' id='location' className='border border-black'>
          {states.map((state) => (
            <option value={state}>{state}</option>
          ))}
        </select>
        <label htmlFor='email'>Correo Electronico</label>
        <input
          required
          type='email'
          name='email'
          className='border border-black'
        />
        <label htmlFor='password'>Contrasena</label>
        <input
          required
          type='password'
          name='password'
          className='border border-black'
        />
      </div>
      <button
        className='bg-sky-500 text-white font-bold p-1.5 m-2 rounded-md'
        type='submit'
      >
        ENVIAR
      </button>
      <p>Ya posee una cuenta? Inicie sesion </p>
      <Link to={'/doctor-login'} className='font-bold text-blue-700'>
        Aqui
      </Link>
    </Form>
  )
}

export default DoctorRegister
