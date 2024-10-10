import { Link, Outlet } from 'react-router-dom'

function AdminPanel() {
  return (
    <div className='flex h-full w-full'>
      <div className='flex bg-sky-100'>
        <nav>
          <ul className='flex flex-col items-center'>
            <li className='p-4 hover:bg-sky-300 w-full text-center'>
              <Link to='/admin/panel/requests'>SOLICITUDES</Link>
            </li>
            <li className='p-4 hover:bg-sky-300 w-full text-center'>
              <Link to={'/admin/panel/data'}>GRAFICOS</Link>
            </li>
            <li className='p-4 hover:bg-sky-300 w-full text-center'>
              <Link to={'/admin/panel/export'}>EXPORTAR DATOS</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default AdminPanel
