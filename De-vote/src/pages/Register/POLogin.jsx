import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './POLogin.css';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';

function POLogin() { 
  const [email, setEmail] = useState('');
  const [ktuid, setKtuid] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, ktuid, password };

    try {
      const response = await fetch(`http://localhost:3000/signup`, { // change this when hosting
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });

      if (response.ok) {

        console.log('Registration successful');
        
        navigate('/');
        // Perform any actions after successful registration, e.g., redirect to login page
      } else {
        console.log('Failed to register123', response);
      }
    } catch (error) {
      console.error('Failed to register', error);
    }
  };

  return (
    <div className='registerpage'>
        <NavBar />
        <div className="register">
            <div className='login'>
                <div className="title"><h3 className='txt'>Presiding Officer</h3></div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input
                            className='h-9 w-3/4 rounded-lg ml-10 mt-0'
                            type="email"
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
        
                        <input
                            className='h-9 w-3/4 rounded-lg ml-10 mt-[15px]'
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className='pt-4 pr-11 flex justify-end'>
                            <input className='h-7 w-1/4 bg-purple-800 rounded-lg text-white cursor-pointer mr-[16px]' type='submit' value='Login'/>
                        </div>
                    </form>
                </div> 
                       
            </div>
        </div>
    </div>
  );
}

export default POLogin;
