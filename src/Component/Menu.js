const Menu =({setActive})=>{
    const menuObject = ["TOMMY", "BIGDROP", "CUKER"];
    return(
        <ul>
            {menuObject.map((item, index)=>{
                return(
                    <li onClick={()=> setActive(item)} key={index}>{item}</li>
                )
            })}
        </ul>
    )
}

export default Menu;