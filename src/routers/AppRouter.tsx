import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import Template from 'components/templates/Default'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Register from 'pages/Register'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import ForgotPassword from 'pages/ForgotPassword'

const AppRouter = (): any => {
  return (
    <Router>
      <Template>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PublicRoute exact path='/login' component={Login} />
          <PublicRoute exact path='/register' component={Register} />
          <PublicRoute exact path='/forgot-password' component={ForgotPassword} />
          <Redirect to="/"></Redirect>
        </Switch>
      </Template>
    </Router>
  )
}

export default AppRouter
