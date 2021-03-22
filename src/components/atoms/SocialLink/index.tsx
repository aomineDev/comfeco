import './styles.scss'

export interface ISocialLinkProps {
  href: string
  iconType: string
  iconName: string
}

const SocialLink: React.FC<ISocialLinkProps> = ({ href, iconType, iconName }) => {
  const iconClassName = `${iconType} fa-${iconName}`

  return (
    <a
      href={href}
      className="social-link"
      target="_blank"
    >
      <span className="social-link__icon">
        <i className={iconClassName} />
      </span>
    </a>
  )
}

export default SocialLink
