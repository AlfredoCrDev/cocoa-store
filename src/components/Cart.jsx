import { useContext, useState } from "react"
import { contexto } from "../cartContext"

function Cart() {

  const valorDelContexto = useContext(contexto)
  const carrito = valorDelContexto.carrito;
  const removeItem = valorDelContexto.removeItem;


  const totalSum = carrito.reduce((sum, item) => sum + item.precio * item.cantidadItem, 0);

  return (
    <div>
      <h1>Productos en el carrito:</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
            <th className="table-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id} className="cart-item">
              <td>{item.nombre}</td>
              <td>${item.precio.toLocaleString()}</td>
              <td>{item.cantidadItem}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>X</button>
              </td>
              <td className="table-right">${(item.precio * item.cantidadItem).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-sum">
        <strong>Total a Pagar:</strong> ${totalSum.toLocaleString()}
      </div>
    </div>
  )
}

export default Cart