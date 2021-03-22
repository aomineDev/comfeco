export type Color = 'primary' | 'secondary' | 'dark' | 'black' |'white' |'red' |'pink' |'purple' |'deep-purple' |'indigo' |'blue' |'light-blue' |'cyan' |'teal' |'green' |'light-green' |'lime' |'yellow' |'amber' |'orange' |'deep-orange' |'brown' |'grey' |'blue-grey'

export type ButtonType = 'button' | 'submit'

export type ButtonSize = 'small' | 'large' | 'x-small' | 'x-large'

export type ClickEvent = React.MouseEvent<HTMLButtonElement>

export interface IButtonProps {
  type?: ButtonType
  to?: string
  href?: string
  iconClass?: string
  color?: Color
  size?: ButtonSize
  icon?: boolean
  elevation?: boolean
  block?: boolean
  rounded?: boolean
  text?: boolean
  outlined?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  handleClick?: () => void
}

export interface IButtonContent {
  isLoading: boolean
  iconClass?: string
  icon: boolean
}
