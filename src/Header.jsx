import {useState,useEffect} from 'react'
import Favoritos from './components/Favoritos';
import useCategorias from './Hooks/useCategorias';
import useBebidas from './Hooks/useBebidas';

function Header(){
    const {categorias}=useCategorias()
    const [alerta,setAlerta] = useState('')
    const {consultarBebida,handleFavMostrar,mostrarFav} = useBebidas()
    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    function handleSubmit(e){
        e.preventDefault();
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return

        }
        consultarBebida(busqueda)


    }
  


    return(
      <header className="flex flex-col justify-center items-center">
             <div className=" bg-red-500 fixed m-0 h-20  top-0 w-screen">
                 <h1 className="text-center text-24xl text-white font-bold ">Buscador de Bebidas</h1>
                 

             </div>
             <div className='fixed left-2 top-24 z-50'>
            <button className='bg-red-500 text-white font-bold rounded-full p-3 opacity-75' onClick={()=>handleFavMostrar()}>
                {!mostrarFav ? 'Ver favoritos' : 'Cerrar ventana'}
                </button>

             </div>
           

            {mostrarFav && 
                 <div className='fixed  pt-5 right-0 top-2 bottom-2 h-screen bg-red-400 overflow-y-auto flex flex-col items-center justify-start w-full'>
                    <Favoritos />
                   

                 </div>
            
            }

     
             <form 
             onSubmit={handleSubmit}
             className="mt-32 w-3/4" > 
                <div className="flex items-center justify-center w-full gap-x-6">
                    <div className="flex flex-col w-2/4">
                        <label htmlFor="" className=" font-bold ">Nombre Bebida</label>
                        <input name='nombre' value={busqueda.nombre}
                         onChange={e=>setBusqueda({
                             ...busqueda,
                              [e.target.name]:e.target.value

                        }
                          )} required  className="border-2 border-gray-400 rounded-lg h-8" type="text" />
                    </div>
                    <div className="flex flex-col w-2/4">
                        <label htmlFor="" className="font-bold ">CategoríaBebida</label>
                        <select  value={busqueda.categoria}
                         onChange={e=>setBusqueda({
                             ...busqueda,
                              [e.target.name]:e.target.value

                        }
                          )} required  className="border-2 border-gray-400 rounded-lg h-8" name="categoria" id="">
                            <option value="">--Seleccione Categoria</option>
                            {categorias.map(categoria=>(
                                <option className='text-indigo-500' key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                            ))}


                        </select>
                       
                    </div>
                   
                </div>
                <input className="bg-red-500 rounded-full h-6 w-36 text-white  mt-2" value={'Buscar Bebida'} type="submit" />
                <hr className="mt-4 w-ful"></hr>
               

             </form>
            

        </header>

    )
}
export default Header;