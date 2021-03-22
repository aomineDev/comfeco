import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../store/auth/authContext'

const PrivateRoute = ({ component: RouteComponent, ...rest }: any): any => {
  const { isLogged } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={ routeProps => isLogged === true
        ? (<RouteComponent {...routeProps} />)
        : (<Redirect to={'/login'} />)}
    />
  )
}
export default PrivateRoute
