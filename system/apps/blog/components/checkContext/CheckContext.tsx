import { useUserContext } from 'apps/blog/store/fallbackContext/context';
import React from 'react';
import { Wrapper, LogIn, LogOut } from './CheckContext.style';

function CheckContext() {
  const { user, signInUser, logoutUser } = useUserContext();
  return (
    <Wrapper>
      <LogIn onClick={signInUser}>Log in</LogIn>
      <LogOut onClick={logoutUser}>Log out</LogOut>
      {user === false ? (
        <>
          <h3>Your session expired 💤</h3>
          <p>
            Sign in again to explore our advanced features our our application
          </p>
        </>
      ) : (
        <p>You are logged in</p>
      )}
    </Wrapper>
  );
}

export default CheckContext;
