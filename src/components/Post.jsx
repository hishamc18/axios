import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Post() {

  const [data, setData] = useState([])
    useEffect(()=>{
        axios.post("https://reqres.in/api/users",{
                "name": "Hisham",
                "job": "Developer"
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

export default Post
