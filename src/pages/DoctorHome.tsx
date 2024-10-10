import { useState, useEffect } from 'react'

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
        console.log(data)
        setData(data)
      })
  }, [])

  return (
    <>
      <div>
        <h2>CITAS PENDIENTES</h2>
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
                    }}
                    className='bg-green-300'
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
    </>
  )
}

export default DoctorHome
