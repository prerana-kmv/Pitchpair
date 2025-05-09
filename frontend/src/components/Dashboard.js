import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signOutUser } from '../services/firebase';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Welcome to Dashboard</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </header>
      <main>
        <p>Email: {user?.email}</p>
        <p>Email verified: {user?.emailVerified ? 'Yes' : 'No'}</p>
      </main>
    </div>
  );
};

export default Dashboard;