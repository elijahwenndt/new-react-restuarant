export default function DinnerList (props) {
    
    let dFoodFilter = props.data.filter(dinner =>
        dinner.category.title === 'Dinner'
    );
    
    let dinnerItems = []
    for (let i=0; i<dFoodFilter.length; i++){
        dinnerItems.push(
            
        <div className = 'col-lg-6 col-12 d-flex align-items-stretch my-3'>
            <div className="card" key={desFoodFilter[i].id}> 
                <div className="card-body">
                    <h3 className="card-title text-center ">{desFoodFilter[i].title}</h3>
                    <h5 className="card-text text-center">{desFoodFilter[i].price}</h5>
                    <div className="card-text text-center align-items-center">{desFoodFilter[i].description}</div>
                </div>
            </div>
        </div>
            
        )
    
    }
    return <>{dinnerItems}</>
}