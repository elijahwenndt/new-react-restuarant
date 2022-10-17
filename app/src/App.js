import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Meal from "./Meal";
import Buttons from "./Buttons";
import Spinner from "./Spinner";
import Header from "./Header";

export default function App() {
  const [page, setPage] = useState("Home");
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://astute-baton-362318.ue.r.appspot.com/api/json/"
      );
      setData(response.data);
    }
    getData();
  }, []);

  const mealOptions = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Side",
    "Appetizer",
  ];

  function handleClick(text) {
    setPage(text);
  }

  if (data.length === 0) return <Spinner />;

  return (
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
