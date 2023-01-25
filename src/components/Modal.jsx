import { useState, useEffect } from 'react'
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({
  setModal, 
  animarModal, 
  setAnimarModal, 
  guardarGasto,
  gastoEditar,
  setGastoEditar}) => {

  const [mensaje, setMensaje] = useState('');

   const [nombre, setNombre]= useState('')
   const [cantidad, setCantidad]= useState('')
   const [categoria, setCategoria]= useState('')
   const [fecha, setFecha] =useState('')
   const [id, setId] = useState('')

   useEffect(() => {
    if(Object.keys(gastoEditar).length > 0 ){
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setFecha(gastoEditar.fecha)
      setId(gastoEditar.id)
    }
   
     
   }, [])
   

    const ocultarModal = () => {       
        setAnimarModal(false)
        setGastoEditar({})
        
        setTimeout(() =>{
            setModal(false)
          }, 700)
    }

    const handaleSubmit = (e) => {
        e.preventDefault();
        
        //validar los registros del modal

        if([nombre, cantidad, categoria].includes('')){  //.includes valida los campos vacios
              setMensaje('Todos los campos son obligatorios')
         
               //ciera la alerta del modal
              setTimeout(() =>{
                setMensaje('')
              }, 3000)
              return;
        }

        guardarGasto({nombre, cantidad, categoria, fecha, id})

         // cerrar modal despues de registrar los datos
        setModal(false)         
        setTimeout(() =>{
            setAnimarModal(false)
        }, 700)
        
    }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
             <img src={CerrarBtn} 
                  alt="cerrar modal"
                  onClick={ocultarModal}
                  
                  />
        </div >
             
        <form onSubmit={handaleSubmit} // evento submit para registrar los datos ingresado en el modal
              className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>

              <legend>{gastoEditar.nombre ? "Editar Gasto" : "nuevo Gasto"}</legend>

              {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

              <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>
                   <input 
                       id="nombre"
                       type="text"
                       placeholder='Añade el Nombre del Gasto'
                       value={nombre}  //permite capturar los valores del input de nombre
                       onChange= {e => setNombre(e.target.value)}  //permite actualizar los valores del input nombre
                     />
              </div>

              <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                   <input 
                       id="cantidad"
                       type="number"
                       placeholder='Añade la cantidad del gasto ej. 5000'
                       value={cantidad}
                       onChange= {e => setCantidad(Number(e.target.value))}
                     />
              </div>

              <div className='campo'>
                <label htmlFor="Categoria">Categoria</label>
                <select  id="categoria"
                         value= {categoria}
                         onChange ={e => setCategoria(e.target.value)}
                
                >
                    <option value="">--Seleccione--</option>
                    <option value="ahorros">Ahorros</option>
                    <option value="alimentos">Alimentos</option>
                    <option value="transporte">Transporte</option>
                    <option value="credito_financiero">Creditos y Tarjetas de Credito</option>
                    <option value="Servicios_publicos">Servicios Publicos</option>
                    <option value="diversion">Diversion</option>
                    <option value="salud">Salud</option>
                    <option value="veterinaria">Veterinaria</option>
                    <option value="suscripciones">Suscripciones</option>
                   
                </select>                   
              </div>   
              <input
                   type='submit'
                   value={gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"}              
              />    
        </form>
      
    </div>
  )
}

export default Modal
