import Item from "./Item"

function ItemList(props) {
  return (
    <div className="cardContainer">
      {props.productos.map(producto => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList