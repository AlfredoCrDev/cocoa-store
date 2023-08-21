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
  const [stock, setStock] = useState(props.productos.stock)

  // ACCIONES
  function onAdd(cantidadProducto){
    setCount(cantidadProducto);
    setMostrarCount(false);
    valorDelContexto.addItem(cantidadProducto, props.productos)
    setStock(stock-cantidadProducto)
    //Agregar alerta tostify
  }

  return (
    <div className="detail shadow-2xl p-5 m-5 rounded-lg bg-pink-100">
      <h2>{props.productos.nombre}</h2>
      <p>Categoria: {props.productos.categoria}</p>
      <img className="imgProducto" src={ cocoa }/>
      <p>Detalle del producto: {props.productos.descripcion}</p>
      <p>Precio: $ {(props.productos.precio).toLocaleString()}</p>
      {mostrarCount ? (
        <ItemCount initial={0} stock={stock} onAdd={onAdd} />
      ) : <Link to="/cart"><button>Ir a Carrito</button></Link> }
      {<p>Unidades disponibles: {stock} </p>}
    </div>
  );
}

export default ItemDetail;