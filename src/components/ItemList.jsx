import Item from "./Item"

function ItemList({ productos, parametros }) {
  const productosFiltrados = parametros.id ? productos.filter(item => item.categoria === parametros.id) : productos;

  return (
    <div className="cardContainer">
      {productosFiltrados.map(producto => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList