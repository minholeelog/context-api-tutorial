import './App.css'
import Auth from './components/Auth'
import Header from './components/Header'
import { UserContextProvider } from './context/userContext'

function App() {
  return (
    <div className="ui container">
      <UserContextProvider>
        <Header />
        <Auth />
      </UserContextProvider>
    </div>
  )
}

export default App
