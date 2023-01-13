import React, { useEffect, useState } from "react";
import "./Read.css";
import axios from "axios";
import { Link } from 'react-router-dom';
const Read = () => {
   
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    
    axios
      .get(`https://624af9ee71e21eebbcea8301.mockapi.io/people`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);

 }
 const getData = () => {
    axios.get(`https://624af9ee71e21eebbcea8301.mockapi.io/people/`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
 const onDelete = (id) => {
    axios.delete(`https://624af9ee71e21eebbcea8301.mockapi.io/people/${id}`).then(()=>{
        getData();
    })
 
}
  return (
    <div>
      <div style={{textAlign:"center"}}>
      <Link to="/create" style={{color:"#000",fontSize:"24px"}}>Create someone</Link>
      </div>
        
      <table id="customers">


        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Update</th>
          <th>Delete</th>

        </tr>
        <tbody>
        {APIData.map((data) => {
            return (
                <tr>
                <td>{data.firstName}</td>
                 <td>{data.lastName}</td>
                 <td>  <Link to='/update'>
                 <button onClick={() => setData(data)} className="btn">Update</button>
                 </Link></td>
               
                 <td>
                 <Link to='/'>
                 <button onClick={() => onDelete(data.id)} className="btn">Delete</button>
                 </Link>
                 </td>
              </tr>
         )})}
        </tbody>
      </table>
  
    </div>
  );
};

export default Read;
