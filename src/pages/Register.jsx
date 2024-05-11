import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app'; // Import Firebase app
import 'firebase/compat/database'; // Import the Firebase Realtime Database module

// Initialize Firebase with your project configuration
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

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [registrationStatus, setRegistrationStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Store form data in Firebase
            await firebase.database().ref('users').push(formData);

            // Update registration status
            setRegistrationStatus('Registration successful.');

            // Clear the form
            setFormData({
                username: '',
                email: '',
                password: '',
            });
        } catch (error) {
            // Update registration status
            setRegistrationStatus('Registration failed. Please try again.');
        }
    };

   

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-transparent"> {/* Set background color to transparent */}
            <div className="relative w-96">
                <div className="absolute top-0 right-0 mt-2 mr-2">
                </div>
                <div className="flex justify-center mb-6">
                    {/* Your logo */}
                    <img src="/src/assets/img/Beige_Elegant_Aesthetic_Minimalist_Luxury_Brand_Logo__1_-removebg-preview 2.png" alt="Logo" className="h-20 w-20" />
                </div>
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold">Register</h2>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center border-b border-gray-400 py-2">
                            <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-3" />
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full py-2 px-3 text-gray-700 focus:outline-none"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex items-center border-b border-gray-400 py-2">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-3" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full py-2 px-3 text-gray-700 focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center border-b border-gray-400 py-2">
                            <FontAwesomeIcon icon={faLock} className="text-gray-400 mr-3" />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full py-2 px-3 text-gray-700 focus:outline-none"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    >
                        Register
                    </button>
                    <p className={`text-center mt-2 ${registrationStatus.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>{registrationStatus}</p> {/* Dynamically set text color based on registration status */}
                </form>
            </div>
        </div>
    );
};

export default Register;
