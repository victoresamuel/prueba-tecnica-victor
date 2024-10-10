import { Form } from 'react-router-dom'
import { useState, useEffect } from 'react'

type Props = {
  id: string
  name: string
  lastname: string
  specialty: string
  location: string
}

export async function action() {
  const form: HTMLFormElement = document.querySelector('#form')!
  const formData = new FormData(form)
  let data = Object.fromEntries(formData)
  data = { ...data, status: 'pending' }

  const response = await fetch('http://localhost:3000/citas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  alert('Su cita ha sido enviada al doctor y esta pendiente por confirmacion')
  return response.json()
}

function PatientHome() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/doctores')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  return (
    <Form
      id='form'
      method='post'
      className='flex flex-col h-full items-center justify-center'
    >
      <h2>AGENDAR UNA CITA</h2>
      <label htmlFor='doctor'>Seleccione al doctor</label>
      <select
        required
        name='doctor'
        id='doctor'
        className='border border-black'
      >
        {data.map((doctor: Props) => (
          <option
            value={doctor.id}
          >{`${doctor.name} ${doctor.lastname} - ${doctor.specialty} - ${doctor.location}`}</option>
        ))}
      </select>
      <label htmlFor='date'>Elija la fecha</label>
      <input required type='date' name='date' />
      <button type='submit'>Enviar</button>
    </Form>
  )
}

export default PatientHome
