import Login from "../pages/loginform"
import RegisterUser from "../pages/registrationform"
import UsersList from "../pages/userslist"
export const RouterNames = {
    Registration: '/',
    USERS_LIST: '/users-list',
    LOGIN: '/login',
   Home:'/user-details'
  } 
  
  export const  PublicRoutes = [
    {
      path: RouterNames.Registration,
      component: <RegisterUser/>,
      linkName: 'Registration'
    },
    {
      path: RouterNames.LOGIN,
      component: <Login/>,
      linkName: 'Login'
    },
    {
      path: RouterNames.USERS_LIST,
      component: <UsersList/>,
      linkName: 'Users List'
    }
  
  ]