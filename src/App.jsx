import Header from "./Header"
import { CategoriasProvider } from "./context/CategoriasProvider"
import { BebidasProvider } from "./context/BebidasProvider"
import ListadoBebidas from "./components/ListadoBebidas"
import ModalBebida from "./components/ModalBebida"


function App() {




  return (

    <CategoriasProvider>
      <BebidasProvider>
       <Header />
       <ListadoBebidas />
      <ModalBebida />

       </BebidasProvider>
    </CategoriasProvider>
    
  )
}

export default App
