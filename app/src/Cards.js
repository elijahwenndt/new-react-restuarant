export default function Cards({
    title,
    price,
    description
    }) {
    return(
    <>
    <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-lg-6 col-md-12'>
                        <div className="card"> 
                            <div className="card-body">
                                <h3 className="card-title text-center ">{title}</h3>
                                <h5 className="card-text text-center">{price}</h5>
                                <div className="card-text text-center">{description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </> 
    )
}