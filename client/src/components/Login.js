import React,{useState} from "react";
import axios from 'axios'

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ login, setLogin ] = useState({
    username:'',
    password:''
  });
  const handleChanges = e => {
    setLogin({
      ...login,
      [e.target.name]:e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', login)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubblePage')
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <label>Login</label>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input 
        type='text'
        name='username'
        onChange={handleChanges}
        />
        <label>Password</label>
        <input 
        type='password'
        name='password'
        onChange={handleChanges}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
