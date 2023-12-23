import useBebidas from "../Hooks/useBebidas"

export const Item = ({bebida}) => {
    const {mostrarIngredientes,handleEliminarFav} = useBebidas()
  return (
    <div className='flex flex-col items-center justify-center p-2 rounded hover:bg-red-700 mb-6 border-2 border-white '>
            <h1>{bebida.strDrink}</h1>
            <img src={bebida.strDrinkThumb} alt="" width={'100px'}/>

            
             

    </div>
  )
}
