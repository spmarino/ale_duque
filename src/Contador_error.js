import { useState , useEffect } from "react"

const Contador = ({init,stock,onAdd}) => {
  
  const [contador,setContador] = useState(init)
  const [confirmado,setConfirmado] = useState(false);
  
  const sumar = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > init) setContador(contador - 1);
  };
  
  const confirmar = () => {
    setConfirmado(true);
  };

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
      {confirmado ? (
        <p className="modal">Se confirmaron {contador} unidades!</p>
      ) : (
         " "
      )}
      </div>
    );

    export default Contador

/*     Hola Sergio!
    Usé tu recomendación del contador y me apareció este mensaje de error:

    Compiled with problems:X

ERROR in ./src/Contador.js

Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: /home/aduque/Documents/Training/react/ecommerce-aduque/src/Contador.js: 'import' and 'export' may only appear at the top level. (38:4)

  36 |     );
  37 |
> 38 |     export default Contador
     |     ^
    at instantiate (/home/aduque/Documents/Training/react/ecommerce-aduque/node_modules/@babel/parser/lib/index.js:72:32)
    at constructor (/home/aduque/Documents/Training/react/ecommerce-aduque/node_modules/@babel/parser/lib/index.js:358:12)
    at Object.raise (/home/aduque/Documents/Training/react/ecommerce-aduque/node_modules/@babel/parser/lib/index.js:3335:19)
    at Object.parseStatementContent (/home/aduque/Documents/Training/react/ecommerce-aduque/node_modules/@babel/parser/lib/index.js:14634:18)
    at Object.parseStatement (/home/aduque/Documents/Training/react/ecommerce-aduque/node_modules/@babel/parser/lib/index.js:14533:17)
    at Object.parseStatement (/home/aduque/Documents/Training/react/ecommerce-aduque/node_modules/@babel/parser/lib/index.js:5823:24)
    at Object.parseBlockOrModuleBlockBody (/home/aduque/Documents/Training/react/ecommerce-aduque/node_modules/@babel/parser/lib/index.js:15176:25)
    at Object.parseBlockBody (/home/aduque/Documents/Training/react/ecommerce-aduque/node_modules/@babel/parser/lib/index.js:15167:10)
    at Object.parseBlock (/home/aduque/Documents/Training/react/ecommerce-aduque/node_modules/@babel/parser/lib/index.js:15151:10)
    at Object.parseFunctionBody (/home/aduque/Documents/Training/react/ecommerce-aduque/node_modules/@babel/parser/lib/index.js:13841:24)


ERROR


src/Contador.js
  Line 38:4:  Parsing error: 'import' and 'export' may only appear at the top level. (38:4) */