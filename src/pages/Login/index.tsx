import { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { AuthContext } from 'store/auth/authContext'

import AuthForm from 'components/organisms/AuthForm'
import Button from 'components/atoms/Button'
import TextField from 'components/atoms/TextField'
import Checkbox from 'components/atoms/Checkbox'

import './styles.scss'

interface IFormInputs {
  email: string
  password: string
  remember: boolean
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('This field is required*'),
  password: yup
    .string()
    .required('This field is required*')
})

const Login: React.FC = () => {
  const { logIn } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const history = useHistory()

  const { register, handleSubmit, errors, watch, setError, setValue } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const hasError: boolean = Object.keys(errors).length !== 0

  const handleLogin = async ({ email, password, remember }: IFormInputs): Promise<void> => {
    try {
      setIsLoading(true)
      await logIn(email, password, remember)
      history.push('/')
    } catch (err) {
      setError('password', { message: 'Incorrect credentials.' })
      setValue('password', '', { shouldValidate: false })
      setIsLoading(false)
    }
  }

  return (
    <AuthForm
      title="iniciar sesión"
      handleSubmit={handleSubmit(handleLogin)}
    >
      <TextField
        type="email"
        label="email"
        name="email"
        value={watch('email')}
        isDisabled={isLoading}
        errorMessage={errors.email?.message}
        refEl={register}
      />
      <TextField
        type="password"
        label="contraseña"
        name="password"
        value={watch('password')}
        isDisabled={isLoading}
        errorMessage={errors.password?.message}
        refEl={register}
      />
      <Checkbox
        label='Recuérdame!'
        id="remember"
        name="remember"
        isDisabled={isLoading}
        refEl={register}
      />
      <Button
        type="submit"
        color="primary"
        iconClass="fas fa-sign-in-alt"
        elevation
        isDisabled={hasError}
        isLoading={isLoading}
        >
        ingresar
      </Button>
      <div className="login__links">
        <p className="login__forget-pass">
          ¿Olvidaste tu contraseña? <Link to="/forgot-password">Recupérala!</Link>
        </p>
        <p className="login__to-register">
          ¿Aún no tienes una cuenta? <Link to="/register">Regístrate!</Link>
        </p>
      </div>
    </AuthForm>
  )
}

export default Login
