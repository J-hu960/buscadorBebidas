import {useState,useEffect,createContext} from 'react'


const  BebidasContext = createContext()

const BebidasProvider = ({children}) =>{
    const [bebidas,setBebidas] = useState([])
    const [modal,setModal] = useState(false);
    const [bebidaId,setBebidaId] = useState(null)
    const[receta,setReceta] = useState([])
    const [favoritos,setFavoritos] = useState([])
    const [mostrarFav, setMostrarFav] = useState(false)

    useEffect(()=>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
        const obtenerReceta = async()=>{
            if(!bebidaId) return
            try {
                const res = await fetch(url);
                const data = await res.json();
                setReceta(data.drinks[0])
                
            } catch (error) {
                console.log(error)
            }
           

        }
        obtenerReceta()

    },[bebidaId])

    const consultarBebida=async datos=>{
        try {
            const url= `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const res = await fetch(url)
            const resultado = await res.json()
            setBebidas(resultado.drinks)
        } catch (error) {
            console.log(error)
            
        }
    }

    const handleModalClick =()=>{
        setModal(!modal)
    }
    const handleFavMostrar =()=>{
        setMostrarFav(!mostrarFav)
    }

    function handleBebidaIdClick(id){
        setBebidaId(id)
    }
   
    function mostrarIngredientes(){
        let ingredientes =[]
        for(let i=0;i<16;i++){
            if(receta[`strIngredient${i}`]){
                ingredientes.push(
                  <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

    function handleNewFav(trago){
        setFavoritos([...favoritos,trago])
    }
    function handleEliminarFav(id){
        const newArray = favoritos.filter(item =>{
           return  item.id!==id
        })
        setFavoritos(newArray)
    }


    return(
        <BebidasContext.Provider 
           value={{
              consultarBebida,
              bebidas,                                                                                                                                                                                 
              handleModalClick,                                                                 
              modal,
              handleBebidaIdClick,
              bebidaId,
              receta,
              mostrarIngredientes,
              setReceta,
              handleFavMostrar,
              setMostrarFav,
              mostrarFav,
              favoritos,
              handleEliminarFav,
              handleNewFav
             
              
           }}
        
        >
            {children}
        </BebidasContext.Provider>
    )
}
export{
   BebidasProvider
}

export default BebidasContext
