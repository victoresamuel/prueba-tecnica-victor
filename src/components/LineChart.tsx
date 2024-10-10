import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

import { lineChartData } from '../chartData'

export function LineChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'TOTAL DE CITAS APROBADAS',
      },
    },
  }

  return (
    <div className='flex justify-center w-2/3'>
      <Line options={options} data={lineChartData} />
    </div>
  )
}
