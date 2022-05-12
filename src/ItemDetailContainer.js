import {useEffect, useState} from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import productosIniciales from "./productos.json"

const ItemDetailContainer = () => {

  const {id} = useParams()
  const [cargando,setCargando] = useState(true)
  const  [producto,setProducto] = useState({})

  useEffect(()=>{
    
    
    const pedido = new Promise((res)=>{
      setTimeout(()=>{
        res(productosIniciales)
      },500)
    })

  
    pedido
    .then((res)=>{
      setCargando(false)
      setProducto(res.find((item)=>item.id == id))
    })
  }, [id])

  if(cargando){
    return(
      <p>cargando...</p>
    )
  }else{
    return (
      <ItemDetail producto={producto}/>
    )
  }
    
}
export default ItemDetailContainer