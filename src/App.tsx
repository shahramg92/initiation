import React, { useState, useEffect } from 'react';
import SignUpPage from './pages/register';
import DashboardPage from './pages/dashboard';

import {
  postRegisterForm
} from './utils'

/**
 * App controller
 */

function App() {  
  
  //iniital state variables
  const [ isAuth, setIsAuth ] = useState<Boolean>(false);
  const [authError, setAuthError] = useState<Boolean>(false);
  const [ token, setToken ] = useState<String>('');

  // handle submit, check auth failure
  const submitUser = async (username: String, password: String) => {
    const response = await postRegisterForm(username, password);
    if(response.data && response.data.token){
       setIsAuth(true);
       setToken(response.data.token);
       setAuthError(false);
    } else {
      setAuthError(true);
    }
  }

  
  return (
    <div className="App">      
      {isAuth ? 
        <DashboardPage token={token}/>
       : 
        <SignUpPage submitUser={submitUser} authError={authError}/>
      }
    </div>
  );
}

export default App;
