import { useState } from "react"
import { Provider } from "../cartContext"

function CartProvider(props) {

  //ESTADOS
  const [carrito, setCarrito] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0)


  // ACCIONES
  const addItem = (nuevaCantidad, productoAgregado)=>{
    // setCantidadTotal(cantidadTotal + nuevaCantidad)
    // productoAgregado.cantidadItem = nuevaCantidad
    // const copia = carrito.slice(0)
    // copia.push(productoAgregado)
    // setCarrito(copia)

  const productoExistenteIndex = carrito.findIndex(item => item.id === productoAgregado.id);

  if (productoExistenteIndex !== -1) {
    // Si el producto ya existe en el carrito, actualiza la cantidad
    const copia = carrito.slice();
    copia[productoExistenteIndex].cantidadItem += nuevaCantidad;
    setCarrito(copia);
    console.log(carrito)
  } else {
    // Si el producto no existe en el carrito, agrégalo
    productoAgregado.cantidadItem = nuevaCantidad;
    const copia = [...carrito, productoAgregado];
    setCarrito(copia);
    console.log(carrito)
  }
  
  setCantidadTotal(cantidadTotal + nuevaCantidad);
  
}

  const removeItem =(id) => {
    const productoIndex = carrito.findIndex((item) => item.id === id);

    if (productoIndex !== -1) {
      const copia = carrito.slice();
      const cantidadEliminada = copia[productoIndex].cantidadItem;
      copia.splice(productoIndex, 1);
      setCarrito(copia);
      setCantidadTotal(cantidadTotal - cantidadEliminada);
    }
  }
  const clearCart=() => {
    setCarrito([]);
    setCantidadTotal(0);
   }

  
  const valorDelContexto = {
    carrito: carrito,
    cantidadTotal: cantidadTotal,
    valorTotal: 0,
    addItem :addItem,
    removeItem:removeItem,
    clearCart:clearCart
  }

  return (
    <Provider value={valorDelContexto}>
      { props.children }
    </Provider>
  )
}

export default CartProvider