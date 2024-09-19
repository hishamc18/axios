import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Get() {

  const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2")
        .then(res => setData(res.data.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div>
      <h2>Axios Library in React JS</h2>
      {
        data.map((d,i) => {
          return <p key={i}>{d.email}</p>
        })
      }
    </div>
  )
}

export default Get
