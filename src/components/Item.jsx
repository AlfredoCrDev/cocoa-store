import { Link } from "react-router-dom"
import cocoa from "../img/cocoa-logo.png"

function Item(props) {
  return (
      <div className="cardProducto detail shadow-2xl p-5 m-5 rounded-lg bg-pink-100 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold">{props.producto.nombre}</h2>
        <img className="imgProducto" src={ cocoa } alt="producto"/>
        <p className="p-2">Precio: $ {(props.producto.precio).toLocaleString()}</p>
        <Link to={`/producto/${props.producto.id}`}>
          <button className="p-2 rounded-lg bg-pink-400">Ver detalle</button>
        </Link>
      </div>
  )
}

export default Item