import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

import './styles.scss'

const Default: React.FC = ({ children }) => {
  return (
    <div className="template">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Default
