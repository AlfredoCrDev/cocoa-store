import { useState } from "react"
import { toast } from "react-toastify"

function ItemCount(props) {

  const [count, setCount] = useState(0)

  function handleSumar(){
    if(count < props.stock){
      setCount(count + 1)
    } 
  }

  function handleRestar(){
    if(count > 1){
      setCount(count - 1)
    }
  }

  function handleAgregar(){
    props.onAdd(count)
    toast.success("Producto Agredao al Carrito")
  }

  return (
    <div>
      <button onClick={handleRestar} >-</button>
      <p>{count}</p>
      <button onClick={handleSumar}>+</button>
      {count !== 0? (
        <button onClick={handleAgregar} >Agregar a Carrito</button>
      ): <p></p>}
    </div>
  )
}

export default ItemCount