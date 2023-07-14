import { useState } from "react"

function ItemCount(props) {

  const [count, setCount] = useState(0)

  function handleSumar(){
    setCount(count + 1)
  }

  function handleRestar(){
    setCount(count - 1)
  }

  function handleAgregar(){
    props.onAdd()
  }

  return (
    <div>
      <button onClick={handleSumar}>+</button>
      <p>{count}</p>
      <button onClick={handleRestar}>-</button>
      <button onClick={handleAgregar} >Agregar a Carrito</button>
    </div>
  )
}

export default ItemCount