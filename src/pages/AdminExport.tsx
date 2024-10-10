import { useState, useEffect } from 'react'

import { CSVLink } from 'react-csv'

type PatientProps = {
  id: string
  name: string
  lastname: string
  email: string
  password: string
}

type DoctorProps = {
  id: string
  name: string
  lastname: string
  specialty: string
  location: string
  email: string
  password: string
}

function AdminExport() {
  const [data, setData] = useState([])
  const [doctorData, setDoctorData] = useState([])
  const [dateData, setDateData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pacientes')
      .then((response) => response.json())
      .then((data) => {
        data = data.map((patient: PatientProps) => {
          return {
            id: patient.id,
            name: patient.name,
            lastname: patient.lastname,
            email: patient.email,
          }
        })
        setData(data)
      })

    fetch('http://localhost:3000/doctores')
      .then((response) => response.json())
      .then((doctorData) => {
        doctorData = doctorData.map((doctor: DoctorProps) => {
          return {
            id: doctor.id,
            name: doctor.name,
            lastname: doctor.lastname,
            specialty: doctor.specialty,
            location: doctor.location,
            email: doctor.email,
          }
        })
        setDoctorData(doctorData)
      })

    fetch('http://localhost:3000/citas')
      .then((response) => response.json())
      .then((dateData) => {
        setDateData(dateData)
      })
  }, [])
  return (
    <>
      <div>
        <div className='flex gap-4'>
          <h2>EXPORTAR TABLA DE PACIENTES</h2>
          <button className='flex flex-col text-sky-500'>
            <CSVLink data={data} separator=';' filename='Tabla-de-pacientes'>
              Exportar
            </CSVLink>
          </button>
        </div>
        <div className='flex gap-4'>
          <h2>EXPORTAR TABLA DE DOCTORES</h2>
          <button className='flex flex-col text-sky-500'>
            <CSVLink
              data={doctorData}
              separator=';'
              filename='Tabla-de-doctores'
            >
              Exportar
            </CSVLink>
          </button>
        </div>
        <div className='flex gap-4'>
          <h2>EXPORTAR TABLA DE CITAS</h2>
          <button className='flex flex-col text-sky-500'>
            <CSVLink data={dateData} separator=';' filename='Tabla-de-citas'>
              Exportar
            </CSVLink>
          </button>
        </div>
      </div>
    </>
  )
}

export default AdminExport
