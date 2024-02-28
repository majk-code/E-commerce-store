import React, { useState } from 'react'
import '../Components/CSS/LoginSignup.css'

export const LoginSignup = () => {
  const [state, setState] = useState('Login')
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  })

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => responseData = data)

    if(responseData.succes) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else {
      alert(responseData.errors)
    }
    
  }

  const signup = async () => {
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => responseData = data)

    if(responseData.succes) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else {
      alert(responseData.errors)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === 'SignUp' ? <input onChange={handleChange} type="text" name="username" value={formData.username} id="" placeholder='Your name' /> : <></>}
          <input onChange={handleChange} type="email" name="email" value={formData.email} id="" placeholder='Your email'/>
          <input onChange={handleChange}  type="password" name="password" value={formData.password} id="" placeholder='Type password'/>
        </div>
        <button onClick={()=> {state === 'Login' ? login() : signup()}}>Continue</button>
        {state === 'SignUp' ? <p>Already have account? <span className='signup-span' onClick={()=> {setState('Login')}}>Login here</span></p> : <></>}
        {state === 'Login' ? <p>Create account? <span className='signup-span' onClick={()=> {setState('SignUp')}}>Sign up here</span></p> : <></>}
      </div>
    </div>
  )
}
