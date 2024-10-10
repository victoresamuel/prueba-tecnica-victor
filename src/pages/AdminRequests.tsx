import { useEffect } from 'react'
import { useState } from 'react'

type Props = {
  id: string
  name: string
  specialty: string
  location: string
}

function AdminRequests() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/solicitudes')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  function declineClick() {
    alert('Solicitud Rechazada')
  }

  return (
    <div>
      <div>
        <h2>SOLICITUDES</h2>
        <table>
          <thead>
            <tr>
              <th scope='col'>Nombre</th>
              <th scope='col'>Especialidad</th>
              <th scope='col'>Ubicacion</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((doctor: Props) => (
              <tr>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.location}</td>
                <td>
                  <button
                    onClick={() => {
                      fetch('http://localhost:3000/doctores', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(doctor),
                      }).then((response) => response.json())

                      fetch(`http://localhost:3000/solicitudes/${doctor.id}`, {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      })
                    }}
                    className='bg-green-300'
                  >
                    Aceptar
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      fetch(`http://localhost:3000/solicitudes/${doctor.id}`, {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      })
                    }}
                    className='bg-red-400'
                  >
                    Rechazar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminRequests
