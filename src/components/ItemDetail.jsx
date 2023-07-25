import {contexto} from "../cartContext";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cocoa from "../img/cocoa-logo.png"
import { Link } from "react-router-dom";


function ItemDetail( props ) {

  const valorDelContexto = useContext(contexto)
  console.log(valorDelContexto);

  // ESTADOS
  const [count, setCount] = useState(0);
  const [mostrarCount, setMostrarCount] = useState(true)

  // ACCIONES
  function onAdd(cantidadProducto){
    setCount(cantidadProducto);
    setMostrarCount(false);
    valorDelContexto.addItem(cantidadProducto)
  }

  return (
    <div>
      {props.productos.map(producto => (
        <div key={producto.id}>
          <h2>{producto.nombre}</h2>
          <p>Categoria: {producto.categoria}</p>
          <img className="imgProducto" src={ cocoa }/>
          <p>Detalle del producto: {producto.descripcion}</p>
          <p>Precio: $ {producto.precio}</p>
        </div>
      ))}
      {mostrarCount ? (
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
      ) : <Link to="/cart"><button>Terminar Compra</button></Link> }
    </div>
  );
}

export default ItemDetail;