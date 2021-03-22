import Form, { IFormProps } from 'components/molecules/Form'

import './styles.scss'

const AuthForm: React.FC<IFormProps> = ({ children, title, description, handleSubmit }) => {
  return (
    <div className="auth-form">
      <div className="auth-form__wrapper">
        <Form
          handleSubmit={handleSubmit}
          title={title}
          description={description}
        >
          {children}
        </Form>
      </div>
    </div>
  )
}

export default AuthForm
