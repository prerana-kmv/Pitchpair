import React from 'react';
import { auth } from '../services/firebase';
import { sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const navigate = useNavigate();

  const resendVerification = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      alert('Verification email sent! Please check your inbox.');
    } catch (error) {
      alert('Error sending verification email: ' + error.message);
    }
  };

  const checkVerification = async () => {
    await auth.currentUser?.reload();
    if (auth.currentUser?.emailVerified) {
      navigate('/dashboard');
    } else {
      alert('Email not verified yet. Please check your inbox.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Verify Your Email</h2>
      <p>We've sent a verification email to your address.</p>
      <p>Please check your inbox and click the verification link.</p>
      
      <div className="button-group">
        <button onClick={resendVerification}>
          Resend Verification Email
        </button>
        <button onClick={checkVerification}>
          I've Verified My Email
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;