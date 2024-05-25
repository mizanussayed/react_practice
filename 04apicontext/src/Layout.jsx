import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='text-center p-3 bg-gray-500 dark:bg-gray-700'>
      <Link to={"/"}>api context 1</Link>
      <Link to={"/theme"}>api context 2 theme</Link>
      <Outlet />
    </div>
  )
}

export default Layout
