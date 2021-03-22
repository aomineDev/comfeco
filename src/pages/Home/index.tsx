import { useContext } from 'react'

import { AuthContext } from 'store/auth/authContext'

import './styles.scss'

const Home: React.FC = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="home">
        <h2>Bievenido {user.email} !</h2>
    </div>
  )
}

export default Home
