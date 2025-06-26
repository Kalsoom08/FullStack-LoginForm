import React from 'react'
import { RegisterUser} from './Components/RegisterUser';
import { LoginUser } from './Components/loginUser';

const App = () => {
  return (
    <div>
       <LoginUser/>
        <RegisterUser/>
    </div>
  )
}

export default App