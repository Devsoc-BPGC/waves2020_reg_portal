import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router';
import OutlineText from '../../components/microcomponents/OutlineText';
import './login.css';

export default function Login() {
  const history = useHistory();
  // const BASE_URL = process.env.REACT_APP_OAUTH_CLIENT_ID;
  const CLIENT_ID =
    '31309758750-n4slsq8qkhraa2m7bs5vkaseasegcnu7.apps.googleusercontent.com';
  const responseGoogle = res => {
    localStorage.setItem('userGoogleId', res.googleId);
    history.push('/register');
  };
  const failureGoogle = res => {
    console.log(res);
  };
  return (
    <div className='loginMaster'>
      <OutlineText text='LOGIN' color='#ff6df0' size='5rem' weight='100' />

      <div id='google'>
        <GoogleLogin
          className='aaa'
          clientId={CLIENT_ID}
          buttonText='Log in with Google'
          onSuccess={responseGoogle}
          onFailure={failureGoogle}
          cookiePolicy='single_host_origin'
        />
      </div>
    </div>
  );
}
