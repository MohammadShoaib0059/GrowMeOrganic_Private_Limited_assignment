import React, { useEffect, useState } from 'react'
import DataGridDemo from './Grid';
import DenseAppBar from './Navbar';
const FakeData = () => {
    const [data,SetData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>response.json())
        .then(result => SetData(result))
    },[])
  return (
    <div>
    <DenseAppBar/>
    <div>
        <DataGridDemo data={data}/>
    </div>
</div>
  )
}

export default FakeData
