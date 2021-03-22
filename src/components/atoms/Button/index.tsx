import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { IButtonProps, IButtonContent, ClickEvent } from './types'

import './styles.scss'

const ButtonContent: React.FC<IButtonContent> = ({ children, isLoading, icon, iconClass }) => (
  <>
    {isLoading && <span className="btn__loader" />}
    <span className="btn__content">
      {iconClass !== undefined && <span className="btn__icon"><i className={iconClass} /></span>}
      {icon || children}
    </span>
  </>
)

const Button: React.FC<IButtonProps> = ({
  children,
  type = 'button',
  to,
  href,
  iconClass,
  color,
  size,
  icon = false,
  elevation = false,
  block = false,
  rounded = false,
  text = false,
  outlined = false,
  isDisabled = false,
  isLoading = false,
  handleClick
}) => {
  const buttonEl = useRef<HTMLButtonElement>(null)

  let btnClassName: string = 'btn'

  if (color !== undefined) btnClassName += ` btn--${color}`
  if (size !== undefined) btnClassName += ` btn--${size}`

  if (icon) btnClassName += ' btn--is-icon'
  if (elevation) btnClassName += ' btn--has-elevation'
  if (block) btnClassName += ' btn--is-block'
  if (rounded) btnClassName += ' btn--is-rounded'
  if (text) btnClassName += ' btn--is-text'
  if (outlined) btnClassName += ' btn--is-outlined'
  if (isLoading) btnClassName += ' btn--is-loading'

  const rippleEffect = (e: ClickEvent): void => {
    const ripple = document.createElement('span')

    ripple.setAttribute('class', 'btn__ripple')

    ripple.style.top = `${e.nativeEvent.offsetY}px`
    ripple.style.left = `${e.nativeEvent.offsetX}px`
    buttonEl.current?.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  }

  const handleClickWithEffect = (e: ClickEvent): void => {
    if (handleClick !== undefined) handleClick()
    rippleEffect(e)
  }

  if (to !== undefined) {
    return (
      <Link to={to} className={btnClassName}>
        <ButtonContent isLoading={isLoading} iconClass={iconClass} icon={icon}>
          {children}
        </ButtonContent>
      </Link>
    )
  }

  if (href !== undefined) {
    return (
      <a href={href} className={btnClassName}>
        <ButtonContent isLoading={isLoading} iconClass={iconClass} icon={icon}>
          {children}
        </ButtonContent>
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={handleClickWithEffect}
      className={btnClassName}
      disabled={isDisabled}
      ref={buttonEl}
    >
      <ButtonContent isLoading={isLoading} iconClass={iconClass} icon={icon}>
        {children}
      </ButtonContent>
    </button>
  )
}

export default Button
