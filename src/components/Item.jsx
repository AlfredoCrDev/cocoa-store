import { Link } from "react-router-dom"
import cocoa from "../img/cocoa-logo.png"


function Item(props) {
  return (
      <div className="cardProducto">
        <h2>{props.producto.nombre}</h2>
        <img className="imgProducto" src={ cocoa }/>
        <p>Precio: $ {props.producto.precio}</p>
        <Link to={`/producto/${props.producto.id}`}>
          <button>Ver detalle</button>
        </Link>
      </div>
  )
}

export default Item