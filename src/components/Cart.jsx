import { useContext, useState } from "react"
import { contexto } from "../cartContext"
import { serverTimestamp } from "firebase/firestore";
import { guardarOrden } from "../utils";
import { toast } from "react-toastify";

function Cart() {

  const valorDelContexto = useContext(contexto)
  const carrito = valorDelContexto.carrito;
  const removeItem = valorDelContexto.removeItem;
  const totalSum = valorDelContexto.valorTotal;
  const clearCarrito = valorDelContexto.clearCart;

  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: ""
  });

  const [formularioCompleto, setFormularioCompleto] = useState(false);
  const [ticket, setTicket] = useState("")

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));

    const todosLosCamposLlenos = Object.values(userData).every(value => value !== "");
    setFormularioCompleto(todosLosCamposLlenos);
  }

  const handeClick = () =>{
    if (formularioCompleto) {
      const ordenDeCompra = {
        carrito: carrito,
        usuario: userData,
        fecha: serverTimestamp()
      };
      guardarOrden(ordenDeCompra)
        .then((resultado)=>{
          setTicket(resultado.id)
          toast.success("Compra éxitosa!!!")
          clearCarrito();
        })
        .catch((e)=>{
          toast.error("Hubo un error en la compra")
        })
    } else {
      toast.error("Por favor, completa todos los campos del formulario.");
    }
  };

  if(ticket){
    return(
      <div>
        <p>Felidades <strong>{userData.nombre}</strong> su compra se genero bajo el pedido <strong>{ticket}</strong></p>
      </div>
    )
  }

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
              <td>$ {item.precio.toLocaleString()}</td>
              <td>{item.cantidadItem}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>X</button>
              </td>
              <td className="table-right">$ {(item.precio * item.cantidadItem).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-sum">
        <strong>Total a Pagar:</strong>$ {totalSum().toLocaleString()}
      </div>

      <div>
      {<input
          type="text"
          name="nombre"
          value={userData.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
        />}
        {<input
          type="text"
          name="apellido"
          value={userData.apellido}
          onChange={handleInputChange}
          placeholder="Apellido"
        />}
        {<input
          type="email"
          name="correo"
          value={userData.correo}
          onChange={handleInputChange}
          placeholder="Correo"
        />}
        {<input
          type="tel"
          name="telefono"
          value={userData.telefono}
          onChange={handleInputChange}
          placeholder="Teléfono"
        />}
      </div>

      <div>
        {<button onClick={handeClick} >Confirmar Comprar</button>}
        {<button>Vaciar Carrito</button>}
      </div>

    </div>
  )
}

export default Cart