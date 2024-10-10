import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function PatientLogin() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/patient/home')
  }

  return (
    <div>
      <Form
        id='form'
        method='get'
        className='flex flex-col h-full items-center justify-center'
      >
        <h2 className='font-bold'>INICIAR SESION (PACIENTE)</h2>
        <div className='flex flex-col'>
          <label htmlFor='email'>Correo Electronico</label>
          <input type='email' name='email' className='border border-black' />
          <label htmlFor='password'>Contrasena</label>
          <input
            type='password'
            name='password'
            className='border border-black'
          />
        </div>
        <button onClick={handleClick} type='submit'>
          Enviar
        </button>
      </Form>
    </div>
  )
}

export default PatientLogin
