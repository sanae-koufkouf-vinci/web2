
import './App.css'
import User from './components/User'

function App() {
  return (
   <div>
    <User name='Sanae' age={12} isOnline={true} ></User>
    <User name='Belly' age={17} isOnline={false} ></User>
    <User name='Emma' age={23} isOnline={true} ></User>
   </div>
  )
}

export default App
