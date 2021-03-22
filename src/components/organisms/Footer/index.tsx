import SocialLink from 'components/atoms/SocialLink'

import './styles.scss'

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__copy">Copyright &copy; {year}</p>
        <div className="footer__socials">
          <SocialLink
            href='https://twitter.com/comfeco'
            iconType='fab'
            iconName='twitter'
          />
          <SocialLink
            href='https://www.facebook.com/groups/2637132626546045'
            iconType='fab'
            iconName='facebook-f'
          />
          <SocialLink
            href='https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew'
            iconType='fab'
            iconName='youtube'
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
