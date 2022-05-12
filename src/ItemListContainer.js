import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import productosIniciales from "./productos.json"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [productos,setProductos] = useState([])
  const {nombreCategoria} = useParams()


  useEffect(()=>{


    const pedido = new Promise((res)=>{
      setTimeout(()=>{
        res(productosIniciales)
      },500)
    })

    pedido
    .then((res)=>{
  
      setCargando(false)
      setProductos(!nombreCategoria?res:res.filter(product=> product.categorias == nombreCategoria ))
   
    })

  },[nombreCategoria])

  if(cargando){
    return(
      <p>Cargando</p>
    )
  }else{
    return (
      <ItemList productos={productos}/>
    )
  }
}

export default ItemListContainer