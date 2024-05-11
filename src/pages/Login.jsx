import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app'; // Import Firebase app
import 'firebase/compat/database'; // Import Firebase Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyC5jLZ0W1pZjPwoETuSOKZ9qcclJvaUFMk",
    authDomain: "fashion-bd1e9.firebaseapp.com",
    databaseURL: "https://fashion-bd1e9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fashion-bd1e9",
    storageBucket: "fashion-bd1e9.appspot.com",
    messagingSenderId: "878600454352",
    appId: "1:878600454352:web:40b9587def977657741ed5",
};

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Query the Firebase Realtime Database to check if email and password match
      const snapshot = await firebase.database().ref('users').orderByChild('email').equalTo(email).once('value');
      const userData = snapshot.val();

      if (userData) {
        const user = Object.values(userData)[0];
        if (user.password === password) {
          // Password matches, login successful
          setEmail('');
          setPassword('');
          setError('');
          setError('Login successful');
          window.location.reload();
        } else {
          setError('Invalid email or password. Please try again.');
        }
      } else {
        setError('User with this email does not exist.');
      }
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold mt-4">Login</h2>
      </div>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <span className="mr-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full focus:outline-none"
              placeholder="Email Address"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <span className="mr-2">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full focus:outline-none"
              placeholder="Password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
