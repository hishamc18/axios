import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Put() {

  const [data, setData] = useState([])
    useEffect(()=>{
        axios.put("https://reqres.in/api/users/2",{
                "name": "Hisham",
                "job": "Mern Developer"
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[])
  return (
    <div>
      <h2>Axios Library in React JS</h2>
    </div>
  )
}

export default Put
