import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <div style={{backgroundImage:`url(/bg.jpeg)`, justifyContent:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"650px",width:"1400px"}}>
      <center>
            <h2>Welcome, {user}!</h2>
            <p>This is your home page.</p>
            <button onClick={logout}>logout</button>
      </center>
    </div>
  );
};

export default Home;
