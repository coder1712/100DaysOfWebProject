import { Button } from '@mui/material';
import { auth, provider} from './firebase';
import React from 'react';
import "./Login.css";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
}

    return <div className='login'>
        <div className="login__logo">
            <img src="https://maxcdn.icons8.com/Share/icon/Logos/discord_logo1600.png" alt="" />
        </div>
        <Button onClick={signIn}>Sign In</Button>
  </div>;
}

export default Login;
