import axios from 'axios'
import { useState, useEffect } from 'react';
import React from "react";
import Cards from './Cards';

export default function App() {
    // // const [ page, setPage] = useState('home')
    const [data, setData] = useState([])
    // const [page, setPage] = useState
    useEffect(() => {
        async function getPost() {
            const response = await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
            setData(response.data)
        }
        getPost();
        
    }, [])
    console.log(data)
    
    // const dFoodFilter = data.filter(dinner =>
    //     dinner.title === 'Dinner'
    //   );
    // const dinnerList = dFoodFilter.map(dinnerMenu => 
    //     <li>
    //         <div>
    //             title={dinnerMenu.title}
    //         </div>
    //         <div>

    //         </div>
    //     </li>
    //     )
    
    if (data.length != 0) {
        return (
            <Cards
            title = {data[0].title}
            price = {data[0].price}
            description = {data[0].description}
            />
            
         
        )
  
    
}
}

// function Cards({
//     title,
//     price,
//     description
//     }) {
//     return(
//     <>
//     <div className = 'container'>
//                 <div className = 'row'>
//                     <div className = 'col-lg-6 col-md-12'>
//                         <div className="card"> 
//                             <div className="card-body">
//                                 <h3 className="card-title text-center ">{title}</h3>
//                                 <h5 className="card-text text-center">{price}</h5>
//                                 <div className="card-text text-center">{description}</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     </> 
//     )
// }