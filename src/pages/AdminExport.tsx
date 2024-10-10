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

type DateProps = {
  id: string
  doctor: string
  date: string
  status: string
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
        dateData = dateData.map((date: DateProps) => {
          return {
            id: date.id,
            doctor: date.doctor,
            date: date.date,
            status: date.status,
          }
        })
        setDateData(dateData)
      })
  }, [])
  return (
    <>
      <div>
        <div className='flex gap-4'>
          <h2>EXPORTAR TABLA DE PACIENTES</h2>
          <button className='flex flex-col text-sky-500'>
            <CSVLink data={data} separator=';'>
              Export
            </CSVLink>
          </button>
        </div>
        <div className='flex gap-4'>
          <h2>EXPORTAR TABLA DE DOCTORES</h2>
          <button className='flex flex-col text-sky-500'>
            <CSVLink data={doctorData} separator=';'>
              Export
            </CSVLink>
          </button>
        </div>
        <div className='flex gap-4'>
          <h2>EXPORTAR TABLA DE CITAS</h2>
          <button className='flex flex-col text-sky-500'>
            <CSVLink data={dateData} separator=';'>
              Export
            </CSVLink>
          </button>
        </div>
      </div>
    </>
  )
}

export default AdminExport
