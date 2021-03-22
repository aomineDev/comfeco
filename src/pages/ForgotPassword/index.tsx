import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { AuthContext } from 'store/auth/authContext'

import AuthForm from 'components/organisms/AuthForm'
import Button from 'components/atoms/Button'
import TextField from 'components/atoms/TextField'

import './styles.scss'

interface IFormInputs {
  email: string
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('This field is required*')
})

const ForgotPassword: React.FC = () => {
  const { resetPassword } = useContext(AuthContext)
  const [isLoading] = useState<boolean>(false)

  const { register, handleSubmit, watch, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const hasError: boolean = Object.keys(errors).length !== 0

  const handleSend = async ({ email }: IFormInputs): Promise<any> => {
    try {
      const config = {
        url: process.env.REACT_APP_APP_FORGOT_PASSWORD_REDIRECT,
        handleCodeInApp: true
      }
      resetPassword(email, config)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthForm
      title='recuperar contraseña'
      description='Te enviaremos un correo electrónico con un enlace privado para que reasignes tu contraseña.'
      handleSubmit={handleSubmit(handleSend)}
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
      <Button
        type="submit"
        color="primary"
        elevation
        isDisabled={hasError}
        isLoading={isLoading}
      >
        Enviar Enlace
      </Button>
    </AuthForm>
  )
}

export default ForgotPassword
