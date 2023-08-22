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
    <div className="flex-row  justify-around p-3 ">
      <div className="flex justify-around p-2">
        <button className="w-9 p-2 rounded-lg bg-pink-400" onClick={handleRestar}>-</button>
        <p className="w-9 p-2 text-center text-lg">{count}</p>
        <button className="w-9 p-2 rounded-lg bg-pink-400" onClick={handleSumar}>+</button>
      </div>
      <div className="flex justify-center p-2">
        {count !== 0? (
          <button className="p-2 rounded-lg bg-pink-400" onClick={handleAgregar} >Agregar a Carrito</button>
        ): <p></p>}
      </div>
    </div>
  )
}

export default ItemCount