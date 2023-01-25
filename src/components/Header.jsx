
import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({

  //props
  gastos,
  setGastos,
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto}) => { //extraer de la app.jsx

  return (

    <header>
        
         
         {isValidPresupuesto ?(          
                <ControlPresupuesto
                     gastos = {gastos}
                     setGastos = {setGastos}
                     presupuesto ={presupuesto}
                     setPresupuesto = {setPresupuesto}
                     setIsValidPresupuesto ={setIsValidPresupuesto}
                />
         ): (
             <NuevoPresupuesto
                  presupuesto= {presupuesto}
                  setPresupuesto = {setPresupuesto}
                  setIsValidPresupuesto = {setIsValidPresupuesto}//solo requiere el set que se puede modificar
        />

         )}
        
    </header>
  )
}

export default Header
