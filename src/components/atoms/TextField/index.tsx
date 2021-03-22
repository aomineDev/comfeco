import './styles.scss'

type inputType = 'text' | 'password' | 'email' | 'number'

interface ITextFieldProps {
  type?: inputType
  label: string
  name: string
  errorMessage?: string
  isDisabled?: boolean
  value: string
  refEl: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined
}

const TextField: React.FC<ITextFieldProps> = ({
  type = 'text',
  label,
  name,
  errorMessage,
  isDisabled,
  value = '',
  refEl
}) => {
  const hasError: boolean = errorMessage !== undefined

  const inputClassName: string = `
    text-field__input ${
      hasError
        ? 'has-error'
        : value.length !== 0
          ? 'is-valid'
          : ''
    }
  `
  return (
    <div className='text-field'>
      <input
        type={type}
        name={name}
        disabled={isDisabled}
        ref={refEl}
        className={inputClassName}
      />
      <label className="text-field__label">{label}</label>
      <span className="text-field__error">{errorMessage}</span>
    </div>
  )
}

export default TextField
