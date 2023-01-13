import React, { useState } from "react";
import axios from "axios";
import "./Create.css";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const postData = () => {

	axios.post(`https://624af9ee71e21eebbcea8301.mockapi.io/people`, {
      firstName,
      lastName,
    }).then(() => {
		navigate.push('/read');
	});
  };
  return (
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
        <button onClick={postData} type="button" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
