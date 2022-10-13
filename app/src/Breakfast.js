export default function BreakfastList (props) {
    
    let bFoodFilter = props.data.filter(breakfast =>
        breakfast.category.title === 'Breakfast'
    );
    
    let breakfastItems = []
    for (let i=0; i<bFoodFilter.length; i++){
        breakfastItems.push(
            
    <>
    <div className = 'container'>
                <div className = 'row justify-content-center'>
                    <div className = 'col-6'>
                        <div className="card"> 
                            <div className="card-body">
                                <h3 className="card-title text-center ">{bFoodFilter[i].title}</h3>
                                <h5 className="card-text text-center">{bFoodFilter[i].price}</h5>
                                <div className="card-text text-center">{bFoodFilter[i].description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </> 

            
        )
    
    }
    return <>{breakfastItems}</>
}