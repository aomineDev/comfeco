import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { AuthContext } from 'store/auth/authContext'

import Button from 'components/atoms/Button'

import logo from 'assets/img/logo.svg'
import './styles.scss'

const Header: React.FC = () => {
  const { isLogged, logOut } = useContext(AuthContext)
  const location = useLocation()

  const handleLogOut = (): void => {
    logOut()
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          src={logo}
          className="header__logo"
          alt="imagotio del evento comfeco"
        />
        {isLogged === true && (
          <button
            onClick={handleLogOut}
            className="social-link"
            title="Cerrar Sesión"
          >
            <span className="social-link__icon">
              <i className="fas fa-sign-out-alt"></i>
            </span>
          </button>
        )}
        {location.pathname === '/forgot-password' && (
          <div className="header__auth">
            <Button
              to="/login"
              color="primary"
              text
            >
              Iniciar Sesión
            </Button>
            <Button
              to="/register"
              color="primary"
              outlined
            >
              Registrate
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
