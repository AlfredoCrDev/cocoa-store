import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import { traerProductos, traerProductosPorId } from '../utils.jsx';
import Loader from './Loader.jsx';
import { toast } from 'react-toastify';


function ItemDetailContainer() {

  const parametroID = useParams();

  const [productos, setProductos] = useState([]);
  const [loader, setLoader] = useState(true);
    
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
      .catch(()=>{
        toast.error("Error al traer el producto")
      })

    },[])

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