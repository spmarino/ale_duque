import { Routes , Route, BrowserRouter } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import Carrito from "./Carrito"
import NavBar from "./components/NavBar"


const Main = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/productos/:nombreCategoria" element={<ItemListContainer />}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default Main