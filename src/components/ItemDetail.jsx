
function ItemDetail( props ) {

  return (
    <div>
      {props.productos.map(producto => (
        <div key={producto.id}>
          <h2>{producto.nombre}</h2>
          <p>Categoria: {producto.categoria}</p>
          <img className="imgProducto" src={producto.imagen}/>
          <p>Detalle del producto: {producto.descripcion}</p>
          <p>Precio: $ {producto.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemDetail;