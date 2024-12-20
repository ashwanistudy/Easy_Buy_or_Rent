import React, { useState, useEffect } from 'react';
import '../styling/AuthPage.css';
import { Link } from "react-router-dom"


const AuthPage = ({ NFVisible, setNFvisible }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setNFvisible(!NFVisible);
  }, []);

  const handleAuthMode = () => {
    setIsLogin(!isLogin);
  
  };

  const handlePageClose = () => {
    setNFvisible(false);
    setNFvisible(!NFVisible); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !name)) {
      
    }
    else if(email && password || (isLogin && name))
    alert(`${isLogin ? 'Logged in' : 'Signed up'} successfully!`);
    setNFvisible(!NFVisible);
  };

  return (
    <div className="auth-page">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form className="auth-form">
        {!isLogin && (
          <label>
            Name
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={!isLogin}
            />
          </label>
        )}

        <label>
          Email
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
       
        <Link to="/" ><button onSubmit={handleSubmit}>
          {isLogin ? 'Login' : 'Sign Up'};
          
        </button></Link>
       
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button onClick={handleAuthMode}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
      <Link to="/" ><button className="close-button" onClick={handlePageClose}>
        Close
      </button></Link>
    </div>
  );
};

export default AuthPage;
