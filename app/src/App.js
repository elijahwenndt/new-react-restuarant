import axios from 'axios'
import { useState, useEffect } from 'react';
import React from "react";
// import Cards from './Cards';
import Dinner from './Dinner'
import Breakfast from './Breakfast'
import Lunch from './Lunch'

export default function App() {
    const [ page, setPage] = useState('Breakfast')
    const [data, setData] = useState([])
    useEffect(() => {
        async function getPost() {
            const response = await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
            setData(response.data)
        }
        getPost();
        
    }, [])
    
    console.log(data)
    
   
    if (data.length != 0) {
        return (
            <>
            <Breakfast data={data} page={setPage}/>
            <Lunch data={data}/>
            <Dinner data={data}/>
            </>
        )
             
}
}
