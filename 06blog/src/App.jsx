import { useEffect, useState } from 'react';
import './App.css'
import {authService} from './appwrite/auth-service';
import store from './store/store'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/auth-slice';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch(store);

  useEffect(() => {
    authService.getCurretUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => { setLoading(false) })
  }, [])

  return !loading ? (
    <div className="w-full block">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div>Loading .....</div>
  )
}

export default App
