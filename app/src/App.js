//import  correct compents and states
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Meal from "./Meal";
import Buttons from "./Buttons";
import Spinner from "./Spinner";
import Header from "./Header";

//main function that renders the other components, sets up states (page state and data from API), and passes props to other other components
export default function App() {
  const [page, setPage] = useState("Home");
  const [data, setData] = useState([]);
  
  //calls api using async await
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://8000-elijahwennd-backendbist-821e6acu6l9.ws-us101.gitpod.io/menuitems/"
      );
      setData(response.data);
    }
    getData();
  }, []);

  //sets up array with items that populate the buttons(also sets the text that gets passed into the buttons)
  const mealOptions = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Side",
    "Appetizer",
  ];

  //defined function that will pass in the text clicked into the page state
  function handleClick(text) {
    setPage(text);
  }
//conditional rendering to return loading wheel if the api call isnt finished
  if (data.length === 0) return <Spinner />;
//main return that renders other main components 
  return (
    //renders header with text to home and passes in handleclick props
    //next generates buttons based on array above while passing in text (also gotten from array) and the handleclick function
    //lastly it renders the entree cards themselves while passing in the data and page state 
    <>
      <Header text="Home" handleClick={handleClick} />
      <div className="container">
        <div className="row text-center">
          {mealOptions.map((mealOption) => (
            <Buttons text={mealOption} handleClick={handleClick} />
          ))}
        </div>
        <div className="row justify-content-center">
          <Meal data={data} page={page} />
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
