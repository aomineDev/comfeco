import './styles.scss'

export interface IFormProps {
  title?: string
  description?: string
  handleSubmit: () => void
}

const Form: React.FC<IFormProps> = ({ children, title = '', description = '', handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__header">
        {title !== '' && <h2 className="form__title"><span>{title}</span></h2>}
        {description !== '' && <p className="form__description">{description}</p>}
      </div>
      {children}
    </form>
  )
}

export default Form
