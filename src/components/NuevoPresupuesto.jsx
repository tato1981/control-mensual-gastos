import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,  
  setIsValidPresupuesto}) => {

  //este useState es local solo para mostrar los mensajes en el HTML
  const [mensaje, setMensaje] = useState('') 


    const handlePresupuesto = (e) => {
          e.preventDefault();
         
          if(!presupuesto || presupuesto < 0){  // se niega la condicion para determinar que los valores sean numeros
            setMensaje('No es un presupuesto valido')
            return; // ya no se ejecuta el codigo
          }
          setMensaje('') //reset mensaje error

          setIsValidPresupuesto(true) //true si hay presupuesto          
     }


  return (

    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlePresupuesto} className="formulario">
            <div className="campo">
            <h1><span>Plan de Gastos </span></h1>
                <label>Definir Presupuesto</label>

                <input 
                    className="nuevo-presupuesto"
                    type="number"
                    placeholder="Añade Presupuesto"
                    value={presupuesto}
                    onChange={ e => setPresupuesto(Number(e.target.value))} //capturar el valor ingresado en el formulario
                
                />

            </div>
                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} 
        </form>
      
    </div>
  )
}

export default NuevoPresupuesto
