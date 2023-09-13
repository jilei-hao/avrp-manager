import React from 'react';
import { useAuth } from '@/util/auth_context';
import Login from '@/app/login/page';

function MainPage() {
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    // Call the login function
    login({ username: 'exampleuser' });
  };

  const handleLogout = () => {
    // Call the logout function
    logout();
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default MainPage;
