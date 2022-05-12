
import Main from "./Main"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import MiCustomProvider from "./miContexto"

const App = () => {
  return (
   <>  <MiCustomProvider>
   <Main />
 </MiCustomProvider>
 <ToastContainer />
 </>
    
  )
}

export default App