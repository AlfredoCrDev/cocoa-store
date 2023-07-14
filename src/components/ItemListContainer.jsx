import { useEffect, useState } from 'react';
import ItemCount from './ItemCount.jsx'
import ItemList from './ItemList.jsx';
import { json } from 'react-router-dom';


function ItemListContainer(props) {
  
  // ESTADOS

  const [productos, setProductos] = useState([]);
  
  // EFECTOS
  
  useEffect(()=>{
    fetch("/bdd/data.json")
      .then(res => res.json())
      .then(json =>{
        setProductos(json)
      })
  },[])
  
  //ACCIONES
  
  function onAdd(){
    console.log("Soy la funcion on Add");
  }
  

  return (
    <div className="contenedorGreeting">
      <h2 className="greeting">{props.greeting}</h2>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer