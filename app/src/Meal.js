export default function MealList(props) {
  //    const {text,
  //     handleClick} = props
  
  let FoodFilter = props.data.filter(
    (meal) => meal.category.title === props.page
  );

  // let breakfastItems = []
  // for (let i=0; i<bFoodFilter.length; i++){
  //     breakfastItems.push(
  //                 <div className = 'col-lg-6 col-12 d-flex align-items-stretch my-3'>
  //                     <div className="card" key={bFoodFilter[i].id}>
  //                         <div className="card-body">
  //                             <h3 className="card-title text-center ">{bFoodFilter[i].title}</h3>
  //                             <h5 className="card-text text-center">{bFoodFilter[i].price}</h5>
  //                             <div className="card-text text-center align-items-center">{bFoodFilter[i].description}</div>
  //                         </div>
  //                     </div>
  //                 </div>
  //     )

  // }
  return (
    <>
      {FoodFilter.map((entree) => {
        
        return (
          <div className="col-md-6 col-sm-12 d-flex align-items-stretch my-2" key={entree.id}>
            <div className="card w-100 bg-light bg-opacity-75">
              <div className="card-body">
                <h3 className="card-title text-center ">{entree.title}</h3>
                <h5 className="card-text text-center">{entree.price}</h5>
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

//refactor breakdown https://beta.reactjs.org/learn/passing-props-to-a-component
//because state is already set by the button clicked
//set the filter to = page
