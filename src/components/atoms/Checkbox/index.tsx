import './styles.scss'

interface ICheckboxProps {
  label: string
  id: string
  name: string
  isDisabled?: boolean
  refEl: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined

}

const Checkbox: React.FC<ICheckboxProps> = ({ label, id, name, isDisabled, refEl }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        name={name}
        ref={refEl}
        className="checkbox__input"
        disabled={isDisabled}
      />
      <label
        htmlFor={id}
        className="checkbox__label"
      >
        {label}
      </label>
    </div>
  )
}

export default Checkbox
