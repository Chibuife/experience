const Card=({filterItem})=>{
    return(
        <div>
            {filterItem.map((item)=>{
                return(
                 <div key={item.id}>
                    <h2>{item.h2}</h2>
                    <h3>{item.category}</h3>
                    <div>{item.date}</div>
                    <ul>
                        <li>{item.details.p1}</li>
                        <li>{item.details.p2}</li>
                        <li>{item.details.p3}</li>
                        <li>{item.details.p4}</li>
                    </ul>
                 </div>
                )
            })}
        </div>
    )
}

export default Card;