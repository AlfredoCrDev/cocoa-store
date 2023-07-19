import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

  // ESTADOS
  const parametroID = useParams();

  const [productos, setProductos] = useState([]);
  
  // EFECTOS
  
  useEffect(()=>{
    setTimeout(()=>{
      fetch("/bdd/data.json")
        .then(res => res.json())
        .then(json =>{
          if (!parametroID.id) {
            setProductos(json);
          } else {
            const filtrado = json.filter(item => item.id === (parametroID.id*1));
            setProductos(filtrado);
          }
        })
        .catch(error=>console.log('Error del FETCH', error))
      }, 2000)
    },[])

  //ACCIONES

  return (
    <div>
      <ItemDetail productos={productos} />
    </div>
  );
}

export default ItemDetailContainer;