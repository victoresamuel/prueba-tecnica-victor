import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const user: string = e.currentTarget.elements.user.value
    const password: string = e.currentTarget.elements.password.value
    user === 'admin' && password === 'admin'
      ? navigate('/admin/panel')
      : navigate('/admin')
  }

  return (
    <div>
      <Form
        id='form'
        onSubmit={handleSubmit}
        className='flex flex-col h-full items-center justify-center'
      >
        <h2 className='font-bold'>INICIAR SESION (ADMINISTRADOR)</h2>
        <div className='flex flex-col'>
          <label htmlFor='user'>Usuario</label>
          <input
            type='text'
            name='user'
            id='user'
            className='border border-black'
          />
          <label htmlFor='password'>Contrasena</label>
          <input
            type='password'
            name='password'
            id='password'
            className='border border-black'
          />
        </div>
        <button type='submit'>Enviar</button>
      </Form>
    </div>
  )
}

export default AdminLogin
