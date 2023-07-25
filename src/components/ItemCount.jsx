import { useState } from "react"

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
  }

  return (
    <div>
      <button onClick={handleRestar} >-</button>
      <p>{count}</p>
      <button onClick={handleSumar}>+</button>
      <button onClick={handleAgregar} >Agregar a Carrito</button>
    </div>
  )
}

export default ItemCount