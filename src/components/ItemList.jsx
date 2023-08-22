import Item from "./Item"

function ItemList(props) {
  return (
    <div className="cardContainer justify-around p-5">
      {props.productos.map(producto => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList