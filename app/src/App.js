import axios from 'axios'
import { useState, useEffect } from 'react';
import React from "react";

export default function App() {
    // // const [ page, setPage] = useState('home')
    const [data, setData] = useState([])
    const [page, setPage] = useState
    useEffect(() => {
        async function getPost() {
            const response = await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
            setData(response.data)
        }
        getPost();
        
    }, [])
    console.log(data)

    if (post.length != 0) {
    return (
    
        <h1 className = 'text-center'>{data[0].title}</h1>
    )
    }   
    

    // <h1>{post[0].title}</h1>
        
    
    //     // <>  
    //     //     {page == 'home' && <Home />}
    //     //     {page == 'lunch' && <h1>LUNCH</h1>}
    //     //     {page == 'dinner' && <h1>DINNER</h1>}
    //     // </> 
    
}

// function grabData() {
//     const [post, setPost] = React.useState([])

//     React.useEffect(() => {
//         async function getPost() {
//             const response = await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
//             // console.log(response)
//             setPost(response.data)
//         }
//         getPost();
//         // console.log(post)
//     }, [])
// }
// function Home() {
//     return (
//     <h1>{post[0]}</h1>
//     )
// }
// async function CallData () {
//         let response = await axios.get(`https://astute-baton-362318.ue.r.appspot.com/api/json/`)
//         console.log(response)
//     // return (
        
//     // )
// }