import {contexto} from "../cartContext";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cocoa from "../img/cocoa-logo.png"
import { Link } from "react-router-dom";


function ItemDetail( props ) {

  const valorDelContexto = useContext(contexto)

  // ESTADOS
  const [count, setCount] = useState(0);
  const [mostrarCount, setMostrarCount] = useState(true)

  // ACCIONES
  function onAdd(cantidadProducto){
    setCount(cantidadProducto);
    setMostrarCount(false);
    valorDelContexto.addItem(cantidadProducto, props.productos)
  }

  return (
    <div>
      <h2>{props.productos.nombre}</h2>
      <p>Categoria: {props.productos.categoria}</p>
      <img className="imgProducto" src={ cocoa }/>
      <p>Detalle del producto: {props.productos.descripcion}</p>
      <p>Precio: $ {props.productos.precio}</p>
      {mostrarCount ? (
        <ItemCount initial={0} stock={props.productos.stock} onAdd={onAdd} />
      ) : <Link to="/cart"><button>Ir a Carrito</button></Link> }
      {<p>Unidades disponibles: {props.productos.stock - count} </p>}
    </div>
  );
}

export default ItemDetail;