import { useState } from "react";

const Hijo = ({onClick}) => {

  const [contador, setContador] = useState(0);

  const handleClick = () => {
    console.log("Click ItemCount")
    setContador(contador + 1)
    //ItemDetail()
  }

  const handleConfirmar = () => {
    onClick("?")
  }
  
  return (
    <>
    <p>Contador : {contador}</p>
    <button onClick={handleClick}>click ItemCount</button>
    <button onClick={handleConfirmar}>confirmar</button>
    </>
  )
}

export default Hijo