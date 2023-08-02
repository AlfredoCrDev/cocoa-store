import { useContext } from "react"
import { contexto } from "../cartContext"
import carrito from "../img/carro.png"

function CartWidget() {

  const valor = useContext(contexto)

  return (
    <div className="cart">
      <img src={ carrito } className="cart__img" alt="carrito de compra" />
      <p className="cart__cantidad">{valor.cantidadTotal}</p>
    </div>
  )
}

export default CartWidget