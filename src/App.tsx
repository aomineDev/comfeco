import UserProvider from 'store/auth/authContext'
import AppRouter from 'routers/AppRouter'

const App: React.FC = () => {
  return (
    <UserProvider>
      <AppRouter/>
    </UserProvider>
  )
}

export default App
