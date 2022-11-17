const Card=({filterItem})=>{
    return(
        <div className="description">
            {filterItem.map((item)=>{
                return(
                 <div key={item.id}>
                    <div className="title">{item.h2}</div>
                    <h4>{item.category}</h4>
                    <div className="date">{item.date}</div>
                    <ul className="details">
                        <li>{item.details.p1}</li>
                        <li>{item.details.p2}</li>
                        <li>{item.details.p3}</li>
                        <li>{item.details.p4}</li>
                    </ul>
                 </div>
                )
            })}
            <div className="moreInfo">More Info</div>
        </div>
    )
}

export default Card;