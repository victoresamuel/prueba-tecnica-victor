import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  id: string
  doctor: string
  date: string
  status: string
}

function DoctorHome() {
  const [data, setData] = useState([])

  useEffect(() => {
    function isPending(data: Props) {
      return data.status === 'pending'
    }

    fetch('http://localhost:3000/citas')
      .then((response) => response.json())
      .then((data) => {
        data = data.filter(isPending)
        setData(data)
      })
  }, [])

  return (
    <>
      <div className='flex flex-col h-full items-center justify-center'>
        <h2 className='font-bold'>CITAS PENDIENTES</h2>
        <table>
          <thead>
            <tr>
              <th scope='col'>Fecha</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((cita: Props) => (
              <tr>
                <td>{cita.date}</td>
                <td>
                  <button
                    onClick={() => {
                      fetch(`http://localhost:3000/citas/${cita.id}`, {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ status: 'approved' }),
                      })
                      alert('La cita ha sido aprobada')
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
                      fetch(`http://localhost:3000/citas/${cita.id}`, {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ status: 'declined' }),
                      })
                      alert('La cita ha sido rechazada')
                      window.location.reload()
                    }}
                    className='bg-red-500 p-2 rounded-md'
                  >
                    Rechazar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DoctorHome
