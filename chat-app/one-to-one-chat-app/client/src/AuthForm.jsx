// AuthForm.jsx
import React from 'react';
import styles from './AuthForm.module.css';

const AuthForm = ({ isLogin, userName, password, onChange, onSubmit, toggleAuth }) => (
  <div className={styles.authContainer}>
    <h1>{isLogin ? 'Login' : 'Register'}</h1>
    <input
      type='text'
      value={userName}
      onChange={(e) => onChange('userName', e.target.value)}
      placeholder='UserName'
      className={styles.inputField}
    />
    <input
      type='password'
      value={password}
      onChange={(e) => onChange('password', e.target.value)}
      placeholder='Password'
      className={styles.inputField}
    />
    <button onClick={onSubmit} className={styles.primaryButton}>
      {isLogin ? 'Login' : 'Register'}
    </button>
    <button onClick={toggleAuth} className={styles.secondaryButton}>
      Switch to {isLogin ? 'Register' : 'Login'}
    </button>
  </div>
);

export default AuthForm;
