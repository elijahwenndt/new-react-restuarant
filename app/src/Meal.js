//sets the cards, displays home when state is home
import Home from "./Home";

export default function Meal(props) {
  if (props.page === "Home") {
    return <Home />;
  }
  //filter the data based on what the current state of the page is
  let FoodFilter = props.data.filter(
    (meal) => meal.category.title === props.page
  );
//main return for the cards. maps over the new filtered data and returns each index of the array styled within its own card
  return (
    <>
      {FoodFilter.map((entree, i) => {
        return (
          <div
            className="col-md-6 col-sm-12 d-flex align-items-stretch my-2"
            key={entree.id}
          >
            <div className="card w-100 bg-light bg-opacity-75">
              <div className="card-body fst-italic">
                <h3 className="card-title text-center ">{entree.title}</h3>
                <h5 className="card-text text-center">{'$' + entree.price}</h5>
                <div className="card-text text-center align-items-center">
                  {entree.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
