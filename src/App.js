
import React from 'react';
import "./App.css"
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import {RouterNames} from "./routes";
import RegisterUser from './pages/registrationform';
import UsersList from './pages/userslist';
import Login from './pages/loginform';
import { useState,useEffect } from 'react';
import Admin from './pages/user-details';

function App() {
  const [token, setToken] = useState('')



  useEffect(() => {
    const tokenData = localStorage.getItem("usertoken");
    if (tokenData) {
      setToken(tokenData)
    }
  }, [])

  return (
    <div className="App">



    <header className='header'>
     <nav className='nav'>
      <ul className='nav-list'>
        {token ?
        <>
          <li className='nav-item'>
            <NavLink className={'nav-link'} to={RouterNames.Home}>Admin</NavLink>
          </li>
          <li className='nav-item'>
              <NavLink className={'nav-link'} to={RouterNames.USERS_LIST}>Users</NavLink>
            </li>
            </>
          :
          <>
            <li className='nav-item'>
              <NavLink className={'nav-link'} to={RouterNames.Registration}>Registration</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={'nav-link'} to={RouterNames.LOGIN}>Login</NavLink>
            </li>
          </>
        }
      </ul>
      </nav>
    </header>

    {token ?
      <Routes>
      <Route element={<Admin/>} path={RouterNames.Home}/>
      <Route element={<UsersList/>} path={RouterNames.USERS_LIST}/>
        <Route element={<Navigate to={'/'}/>} path='*'/>
      </Routes> :
      <Routes>
        <Route element={<RegisterUser/>} path={RouterNames.Registration}/>
        <Route element={<UsersList/>} path={RouterNames.USERS_LIST}/>
        <Route element={<Login/>} path={RouterNames.LOGIN}/>
        <Route element={<Navigate to={'/'}/>} path='*'/>
      </Routes>
    }
  </div>
);
}

export default App;