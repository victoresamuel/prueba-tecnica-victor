import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

import { barChartData } from '../chartData'

export function BarChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'TOTAL DE DOCTORES POR ESPECIALIDAD',
      },
    },
  }

  return (
    <div className='flex justify-center w-2/3'>
      <Bar options={options} data={barChartData} />
    </div>
  )
}
