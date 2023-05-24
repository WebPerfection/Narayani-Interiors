import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleAuthLogin = () => {
    const responseGoogle = (response) => {
        console.log(response); // Handle the response from Google authentication
        const { profileObj } = response;
        console.log('User Details:', profileObj); // Access user details from the profileObj
      }

  return (
    <div>
      <GoogleLogin
        clientId="426326097603-aabqi1reai6v67rtshioao1160370skm.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleAuthLogin;
