import AppRouter from './AppRouter'
import { ApiProvider } from './contexts/api-context'
import './ui/styles/global.css'

function App() {
  return (
    <div className ='app_container'>
      <ApiProvider>
        <AppRouter />
      </ApiProvider>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap"/>
    </div>
  )
}

export default App
