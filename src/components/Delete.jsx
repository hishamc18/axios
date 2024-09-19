import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Delete() {

  const [data, setData] = useState([])
    useEffect(()=>{
        axios.delete("https://reqres.in/api/users/2")
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[])
  return (
    <div>
      <h2>Axios Library in React JS</h2>
    </div>
  )
}

export default Delete
