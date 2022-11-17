import { useState } from "react";

const Menu =({setActive})=>{
    const menuObject = ["TOMMY", "BIGDROP", "CUKER"];
    const [activeClass, setActiveClass] = useState(false)
    return(
        <ul className="menu">
            {menuObject.map((item, index)=>{
                 const newCard = ()=> {
                    setActive(item)
                    setActiveClass(index)
                    
                }
                return(
                    <li onClick={newCard} key={index} className={activeClass === index  ? "active" : ""}>{item}</li>
                )
            })}
        </ul>
    )
}

export default Menu;