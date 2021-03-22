import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../store/auth/authContext'

const PublicRoute = ({ component: RouteComponent, ...rest }: any): any => {
  const { isLogged } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={ routeProps => isLogged === true
        ? (<Redirect to={'/'} />)
        : (<RouteComponent {...routeProps}/>)}
    />
  )
}
export default PublicRoute
