import { specialtys } from './data'

export const barChartData = {
  labels: specialtys,
  datasets: [
    {
      label: 'Especialidades',
      data: [14, 20, 3, 10, 11, 20, 24, 5, 1, 13, 8, 17],
      backgroundColor: 'rgba(54, 200, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
}

export const lineChartData = {
  labels: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  datasets: [
    {
      label: '2023',
      data: [4, 8, 10, 15, 24, 30, 38, 50, 60, 73, 81, 90],
      borderColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: '2024',
      data: [10, 23, 29, 35, 46, 53, 60, 70, 78, 89, 103, 115],
      borderColor: 'rgba(100, 56, 235, 1)',
    },
  ],
}

export const lineChartData2 = {
  labels: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  datasets: [
    {
      label: '2023',
      data: [12, 25, 40, 54, 67, 79, 90, 102, 120, 143, 158, 170],
      borderColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: '2024',
      data: [24, 43, 60, 75, 87, 96, 110, 128, 140, 153, 165, 179],
      borderColor: 'rgba(100, 56, 235, 1)',
    },
  ],
}
