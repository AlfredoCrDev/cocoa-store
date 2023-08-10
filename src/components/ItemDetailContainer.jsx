import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import { traerProductos, traerProductosPorId } from '../utils.jsx';
import Loader from './Loader.jsx';


function ItemDetailContainer() {

  const parametroID = useParams();

  // ESTADOS

  const [productos, setProductos] = useState([]);
  const [loader, setLoader] = useState(true);
  
  // EFECTOS
  
  useEffect(()=>{

    let producto;

    if(parametroID.id){
      producto = traerProductosPorId(parametroID.id)
    } else {
      producto = traerProductos()
    }
      producto.then((resultado)=> {
        setProductos(resultado)
        setLoader(false)
      })

    },[])

  //ACCIONES

  if(loader){
    return(
      <Loader/>
    )
  } else{
    return (
    <ItemDetail productos={productos} />
    )
  }
}

export default ItemDetailContainer;