import Login from "../pages/loginform"
import RegisterUser from "../pages/registrationform"
import UsersList from "../pages/userslist"
export const RouterNames = {
    HOME: '/',
    USERS_LIST: '/users-list',
    LOGIN: '/login',
   USER_DETAILS:'/user-details'
  } 
  
  export const  PublicRoutes = [
    {
      path: RouterNames.HOME,
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