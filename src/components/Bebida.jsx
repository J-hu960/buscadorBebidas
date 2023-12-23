import useBebidas from "../Hooks/useBebidas"
const Bebida = ({bebida}) => {
  const {handleModalClick,handleBebidaIdClick,handleNewFav} = useBebidas()
  return (
    <div className="h-full w-full border-2 border-slate-100 flex flex-col items-center justify-center">
      <h1>{bebida.strDrink}</h1>
      <img src={bebida.strDrinkThumb} alt="" width={'250px'}/>

      <button onClick={()=>{
        handleModalClick(),
        handleBebidaIdClick(bebida.idDrink)
        }} className="bg-yellow-200 text-yellow-950 mt-2 mb-2 w-2/4 rounded">Ver receta</button>
        <button onClick={()=>{
        handleNewFav(bebida)
        }} className="bg-green-600 text-white font-bold p-2 hover:underline hover:bg-green-700  mt-2 mb-2 w-2/4 rounded">Añadir a Favoritos</button>
      
      

    </div>
  )
}

export default Bebida