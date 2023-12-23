import useBebidas from "../Hooks/useBebidas"
import Bebida from "./Bebida"

const ListadoBebidas = () => {
  const {bebidas} = useBebidas()
  return (
    <div className="grid grid-cols-3 gap-2">
      { bebidas && bebidas.map(bebida=>(
        <Bebida 
          key={bebida.idDrink}
          bebida={bebida}
          
        />
      ))}
    </div>
  )
}

export default ListadoBebidas