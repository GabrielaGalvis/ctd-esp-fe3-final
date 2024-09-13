import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from "axios";

const Detail = () => {
  console.log('RENDERIZANDO DETAIL')
  const params = useParams();
  const url ="https://jsonplaceholder.typicode.com/users/"+params.id;
  const [detail,setDetail]= useState({})

useEffect(() => {
  axios(url).then((res) => {
    console.log(res.data);
    setDetail(res.data)
  });
}, []);

console.log(detail)

  return (
    <>
      <h1>Detail Dentist {params.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        
          <tr>
            <td>{detail.name}</td>
            <td>{detail.email}</td>
            <td>{detail.phone}</td>
            <td>{detail.website}</td>
          </tr>
        
      </tbody>
    </table>
    </>
  )
}

export default Detail