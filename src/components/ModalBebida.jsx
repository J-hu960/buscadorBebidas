import {Modal,Image} from 'react-bootstrap'
import useBebidas from '../Hooks/useBebidas'  


 const ModalBebida = () => {
    const {modal,handleModalClick,receta,mostrarIngredientes,setReceta} = useBebidas()
    
  return (
    (<Modal show={modal} onHide={()=>{
      handleModalClick(),
      setReceta({})
     } }>
        (<Modal.Body>
            <div className='glex flex-col items-center justify-center'>
            <img src={receta.strDrinkThumb} alt="" width={'250px'}/>
              <h2>Instrucciones</h2>
                {receta.strInstructions}
               <h2>Ingredientes y cantidad</h2>
                {mostrarIngredientes()}

            </div>
        </Modal.Body>)

    </Modal>)
  )
}

export default ModalBebida