import { BarChart } from '../components/BarChart'
import { LineChart } from '../components/LineChart'
import { LineChart2 } from '../components/LineChart2'

function AdminData() {
  return (
    <div className='flex flex-col items-center w-full'>
      <BarChart />
      <LineChart />
      <LineChart2 />
    </div>
  )
}

export default AdminData
