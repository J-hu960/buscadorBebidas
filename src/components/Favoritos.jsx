import useBebidas from "../Hooks/useBebidas"
import { Item } from "./Item"
export default function Favoritos(){
    const {favoritos} = useBebidas()
    return(
        <main className="flex flex-col justify-center items-center w-full">
            <h1 className="text-white text-center font-bold mt-5">¡Tus bebidas favoritas!</h1>
            <div className="mt-5 grid grid-cols-3 gap-2 ">
             {favoritos.map(bebida=>(
                <Item 
                 key={bebida.idDrink}
                 bebida={bebida}
                
                />
             ))}

            </div>
           


        </main>
    )
}