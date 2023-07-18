import { useEffect, useState } from 'react';
import ItemCount from './ItemCount.jsx'
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';


function ItemListContainer() {
  
  const parametros = useParams()
  
  // ESTADOS

  const [productos, setProductos] = useState([]);
  
  // EFECTOS
  
  useEffect(()=>{
    setTimeout(()=>{
      fetch("/bdd/data.json")
        .then(res => res.json())
        .then(json =>{
          if (!parametros.id) {
            setProductos(json);
          } else {
            const filtrado = json.filter(item => item.categoria === parametros.id);
            setProductos(filtrado);
          }
        })
        .catch(error=>console.log('Error del FETCH', error))
      }, 2000)
    },[parametros.id])
  
  //ACCIONES
  
  function onAdd(){
    console.log("Soy la funcion on Add");
  }
  

  return (
    <div>
      {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
      <ItemList productos={productos} parametros={parametros} />
    </div>
  )
}

export default ItemListContainer