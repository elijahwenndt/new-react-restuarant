import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
// import Cards from './Cards';
import Dinner from "./Dinner";
import Meal from "./Meal";
import Lunch from "./Lunch";
import Dessert from "./Dessert";
import Buttons from "./Buttons";

export default function App() {
  const [page, setPage] = useState("Breakfast");
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getPost() {
      const response = await axios.get(
        "https://astute-baton-362318.ue.r.appspot.com/api/json/"
      );
      setData(response.data);
    }
    getPost();
  }, []);

  const mealOptions = ["Breakfast", "Lunch", "Dinner", "Dessert"];

  function handleClick(text) {
    setPage(text);
  }

  if (data.length === 0)
    return <div className="loading">Give it a dang second...</div>;
  //thank you josh
  return (
    <>
      <div className="container">
        <div className="text-center">
          {mealOptions.map((mealOption) => (
            <Buttons text={mealOption} handleClick={handleClick} />
          ))}
          {/* <Buttons text='Breakfast' handleClick={handleClick} /> 
            <Buttons text='Lunch' handleClick={handleClick} />
            <Buttons text='Dinner' handleClick={handleClick} />
            <Buttons text='Dessert' handleClick={handleClick} />  */}
        </div>
        <div className="row justify-content-center">
          <Meal data={data} page={page} />

          {/* {page == 'Breakfast' && <Breakfast data={data} page={page}/>} */}
          {/* {page == 'Lunch' && <Lunch data={data} />}
                {page == 'Dinner' && <Dinner data={data} />}
                {page == 'Dessert' && <Dessert data={data} />} */}
        </div>
      </div>
    </>
  );
}

//after making the call, put into local storage (to do)
//put data into local storage
//check for local storage
//if an item exists in local storage
//then use local storage instead
