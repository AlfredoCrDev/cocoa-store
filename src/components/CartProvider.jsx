import { useState } from "react"
import { Provider } from "../cartContext"

function CartProvider(props) {

  //ESTADOS
  const [carrito, setCarrito] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0)


  // ACCIONES
  const addItem = (nuevaCantidad, productoAgregado)=>{
    setCantidadTotal(nuevaCantidad)
    console.log(productoAgregado);
  }
  const removeItem =(id) => {}
  const clearCart=() => {}

  
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