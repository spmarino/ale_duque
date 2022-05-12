import { Link } from "react-router-dom"

const Item = ({producto}) => {
  
  return (
    <article className="card">
      <h3>{producto.nombre}</h3>
      <img src="https://via.placeholder.com/300x300" alt="card"/>
      <p>Precio : ${producto.precio}</p>
     
      <Link to={`/producto/${producto.id}`}><button>ver mas</button></Link>
    </article>
  )
}
export default Item