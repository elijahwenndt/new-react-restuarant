export default function DinnerList (props) {
    
    let dFoodFilter = props.data.filter(dinner =>
        dinner.category.title === 'Dinner'
    );
    console.log(dFoodFilter)
    let dinnerItems = []
    for (let i=0; i<dFoodFilter.length; i++){
        dinnerItems.push(
            
    <>
    <div className = 'container'>
                <div className = 'row justify-content-center'>
                    <div className = 'col-6'>
                        <div className="card"> 
                            <div className="card-body">
                                <h3 className="card-title text-center ">{dFoodFilter[i].title}</h3>
                                <h5 className="card-text text-center">{dFoodFilter[i].price}</h5>
                                <div className="card-text text-center">{dFoodFilter[i].description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </> 

            
        )
    
    }
    return <>{dinnerItems}</>
}