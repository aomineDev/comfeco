import AuthForm from 'components/organisms/AuthForm'

import './styles.scss'

const Register: React.FC = () => {
  const handleRegister = (): void => {}

  return (
    <AuthForm handleSubmit={handleRegister}>
    </AuthForm>
  )
}

export default Register
