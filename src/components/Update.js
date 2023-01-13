import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Update = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const updateAPIData = () => {
   
    axios.put(`https://624af9ee71e21eebbcea8301.mockapi.io/people/${id}`, {
        firstName,
         lastName,
	}).then(() => {
		navigate.push('/');
	});
}

const [id, setID] = useState(null);
useEffect(() => {
  setID(localStorage.getItem('ID'))
  setFirstName(localStorage.getItem('First Name'));
  setLastName(localStorage.getItem('Last Name'));
}, []);

  return (
    <div>
       <div className="box">
      <form>
        <span className="text-center">CRUD APP</span>
        <div className="input-container">
          <input
            type="text"
            required=""
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>First Name</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            required=""
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Last Name</label>
        </div>
        <button onClick={updateAPIData} type="button" className="btn">
        Update
        </button>
      </form>
    </div>
    </div>
  )
}

export default Update