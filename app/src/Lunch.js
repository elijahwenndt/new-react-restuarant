export default function LunchList (props) {
    
    let lFoodFilter = props.potato.filter(lunch =>
        lunch.category.title === 'Lunch'
    );
    
    let lunchItems = []
    for (let i=0; i<lFoodFilter.length; i++){
        lunchItems.push(
            
    <div className = 'container' key={lFoodFilter[i].id}>
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


            
        )
    
    }
    return <>{lunchItems}</>
}