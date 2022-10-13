export default function LunchList (props) {
    
    let lFoodFilter = props.data.filter(lunch =>
        lunch.category.title === 'Breakfast'
    );
    
    let lunchItems = []
    for (let i=0; i<lFoodFilter.length; i++){
        lunchItems.push(
            
    <>
    <div className = 'container'>
                <div className = 'row justify-content-center'>
                    <div className = 'col-6'>
                        <div className="card"> 
                            <div className="card-body">
                                <h3 className="card-title text-center ">{lFoodFilter[i].title}</h3>
                                <h5 className="card-text text-center">{lFoodFilter[i].price}</h5>
                                <div className="card-text text-center">{lFoodFilter[i].description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </> 

            
        )
    
    }
    return <>{lunchItems}</>
}