import { db } from "./firebaseConfig"
import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore"

export async function traerProductos(){
  const coleccionProductos = collection(db, "productos");
  const resultado = await getDocs(coleccionProductos)
  
  const productos = resultado.docs.map(doc=>{
        const producto = doc.data()
        producto.id = doc.id
        return producto
      })
      return productos
}

export async function traerProductosPorCategoria(categoria){
  const coleccionProductos = collection(db, "productos");
  
  const consultaConFiltro = query(coleccionProductos, where("categoria", "==", categoria))
  const resultado = await getDocs(consultaConFiltro)
  
  const productos = resultado.docs.map(doc=>{
        const producto = doc.data()
        producto.id = doc.id
        return producto
      })
      return productos
}

export async function traerProductosPorId(id){
  const coleccionProductos = collection(db, "productos");
  const productoId = doc(coleccionProductos, id)

  const resultado = await getDoc(productoId)

  const producto = resultado.data()
  producto.id = resultado.id
  
}