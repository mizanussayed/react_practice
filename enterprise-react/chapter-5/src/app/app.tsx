import { Outlet } from "react-router-dom"
import Dashboard from "./layouts/dashboard"

function App() {
  

  return (
    <>
     <Dashboard/>
     <Outlet />
    </>
  )
}

export default App
