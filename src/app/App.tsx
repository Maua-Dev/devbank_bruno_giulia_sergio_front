import AppRouter from './AppRouter'
import { ApiProvider } from './contexts/api-context'
import './ui/styles/global.css'

function App() {
  return (
    <div className ='app_container'>
      <ApiProvider>
        <AppRouter />
      </ApiProvider>
    </div>
  )
}

export default App
