
import React from 'react';
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import {RouterNames} from "./routes";
import RegisterUser from './pages/registrationform';
import UsersList from './pages/userslist';
import Login from './pages/loginform';
import { useState,useEffect } from 'react';
import UserDetails from './pages/user-details';

function App() {
  const [token, setToken] = useState('')



  useEffect(() => {
    const tokenData = localStorage.getItem("mytoken");
    if (tokenData) {
      setToken(tokenData)
    }
  }, [])

  return (
    <div className="App">



    <header>
     
      <ul>
        {token ?
          <li>
            <NavLink to={RouterNames.USER_DETAILS}>User details</NavLink>
          </li>
          
          :
          <>
            <li>
              <NavLink to={RouterNames.HOME}>Registration</NavLink>
            </li>
            <li>
              <NavLink to={RouterNames.USERS_LIST}>Users</NavLink>
            </li>
            <li>
              <NavLink to={RouterNames.LOGIN}>Login</NavLink>
            </li>
          </>
        }
      </ul>
    </header>

    {token ?
      <Routes>
      <Route element={<UserDetails/>} path={RouterNames.USER_DETAILS}/>
        <Route element={<Navigate to={'/'}/>} path='*'/>
      </Routes> :
      <Routes>
        <Route element={<RegisterUser/>} path={RouterNames.HOME}/>
        <Route element={<UsersList/>} path={RouterNames.USERS_LIST}/>
        <Route element={<Login/>} path={RouterNames.LOGIN}/>
        <Route element={<Navigate to={'/'}/>} path='*'/>
      </Routes>
    }
  </div>
);
}

export default App;