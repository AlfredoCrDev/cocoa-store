import { useEffect, useState } from 'react';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import { traerProductos, traerProductosPorCategoria } from '../utils.jsx';
import Loader from './Loader.jsx';
import { toast } from 'react-toastify';


function ItemListContainer() {
  
  const parametros = useParams()
  
  const [productos, setProductos] = useState([]);
  const [loader, setLoader] = useState(true)
    
  useEffect(()=> {

    let pedido;

    if(parametros.id){
      pedido = traerProductosPorCategoria(parametros.id)
    } else {
      pedido = traerProductos()
    }
      pedido.then((resultado)=> {
        setProductos(resultado)
        setLoader(false)
      })
      .catch(()=>{
        toast.error("Error al traer los productos")
      })
  }, [parametros.id])

  if(loader){
    return (
    <Loader/>
    )
  } else {
    return (
      <ItemList productos={productos} />
    )
  }
}

export default ItemListContainer