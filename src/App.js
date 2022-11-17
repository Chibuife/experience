import { useState } from 'react';
import './App.css';
import Menu from './Component/Menu';
import Object from './Component/Object';
import Card from './Component/Card';
import Header from './Component/Header';

function App() {
  const myObject = Object
  const [active, setActive] = useState("TOMMY")
   const filterItem = myObject.filter((item)=> item.category === active);
  console.log(filterItem)
  return (
    <div>
      <Header/>
      <div className='main'>
      <Menu setActive={setActive}/>
      <Card filterItem={filterItem}/>
      </div>
    </div>
  );
}

export default App;
