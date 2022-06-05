import { useState, useEffect } from "react";

const Contador = ({ init, stock, onAdd }) => {
  const [contador, setContador] = useState(init);
  const [confirmado, setConfirmado] = useState(false);

  const sumar = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > init) setContador(contador - 1);
  };

  const confirmar = () => {
    onAdd(contador);
    setConfirmado(true);
  };

  if (!confirmado) {
    return (
      <div>
        <p>Unidades a comprar : {contador}</p>
        <button onClick={sumar} className="material-icons">
          add
        </button>
        <button onClick={confirmar}>confirmar</button>
        <button onClick={restar} className="material-icons">
          remove
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Unidades a comprar : {contador}</p>
        <button onClick={sumar} className="material-icons">
          add
        </button>
        <button onClick={confirmar}>confirmar</button>
        <button onClick={restar} className="material-icons">
          remove
        </button>
        <p className="modal">Se confirmaron {contador} unidades!</p>
      </div>
    );
  }
};

export default Contador;
