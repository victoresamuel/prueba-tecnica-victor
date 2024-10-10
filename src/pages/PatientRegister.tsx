import { Form } from 'react-router-dom'
import { Link } from 'react-router-dom'

export async function action() {
  const form: HTMLFormElement = document.querySelector('#form')!
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)

  const response = await fetch('http://localhost:3000/pacientes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  alert('Se ha registrado con exito!')
  return response.json()
}

function PatientRegister() {
  return (
    <Form
      id='form'
      method='post'
      className='flex flex-col h-full items-center justify-center'
    >
      <h2 className='font-bold'>FORMULARIO DE REGISTRO (PACIENTE)</h2>
      <div className='flex flex-col'>
        <label htmlFor='name'>Nombre</label>
        <input
          required
          type='text'
          name='name'
          className='border border-black'
        />
        <label htmlFor='lastname'>Apellido</label>
        <input
          required
          type='text'
          name='lastname'
          className='border border-black'
        />
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
        type='submit'
        className='bg-sky-500 text-white font-bold p-1.5 m-2 rounded-md'
      >
        ENVIAR
      </button>
      <p>Ya posee una cuenta? Inicie sesion </p>
      <Link to={'/patient-login'} className='font-bold text-blue-700'>
        Aqui
      </Link>
    </Form>
  )
}

export default PatientRegister
