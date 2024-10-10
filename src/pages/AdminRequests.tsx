import { useEffect } from 'react'
import { useState } from 'react'

type Props = {
  id: string
  name: string
  lastname: string
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

  return (
    <div className='flex items-start justify-center w-full'>
      <div className='flex flex-col items-center'>
        <h2>SOLICITUDES</h2>
        <table>
          <thead>
            <tr>
              <th scope='col'>Nombre</th>
              <th scope='col'>Apellido</th>
              <th scope='col'>Especialidad</th>
              <th scope='col'>Ubicacion</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((doctor: Props) => (
              <tr>
                <td>{doctor.name}</td>
                <td>{doctor.lastname}</td>
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
                      alert('La solicitud del doctor ha sido aprobada')
                      window.location.reload()
                    }}
                    className='bg-green-500 p-2 rounded-md m-2'
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
                      alert('La solicitud del doctor ha sido rechazada')
                      window.location.reload()
                    }}
                    className='bg-red-500 p-2 rounded-md m-2'
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
