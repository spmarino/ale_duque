import Contador from "./Contador"

const ItemDetail = ({producto}) => {

  const onAdd = (contador) => {
   console.log(contador)
    }

  return (
    


      <div> <h1>Detalle del producto</h1>
      <p>{producto.nombre}
      </p>
      <img src="https://via.placeholder.com/300" alt=""/>
      <p>Precio : {producto.precio}</p>
       <Contador stock={10} init={1} onAdd={onAdd}/>
       
    </div>
  )
}

export default ItemDetail