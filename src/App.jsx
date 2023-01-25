import { useState, useEffect } from 'react'
import Filtros from './components/Filtros'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'



function App() {

  const [gastos, setGastos] = useState(   //captura los gastos ingresados del arreglo guardarGAsto
   localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])


  const [presupuesto, setPresupuesto] = useState(             //false porque al cargar la aplicacion no hay presupuesto
   Number(localStorage.getItem('presupuesto')) ?? 0
  );   
  
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})  //cada gasto es un objeto

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  //editar gasto en el modal
  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0 ){
      setModal(true)
     
      
      setTimeout(() =>{
        setAnimarModal(true)
      }, 700)
    }
  }, [gastoEditar])

    

       
  //implementando LS presupuesto
  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  //implementando gastos en LS gastos
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])    
  }, [gastos])

  useEffect(() => {
   if(filtro){
    // filtrar gastos por categoria
    const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
    setGastosFiltrados(gastosFiltrados)
   }
  }, [filtro])
    
  
  useEffect(() => {
     const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    if(presupuestoLS > 0){
      setIsValidPresupuesto(true)
    }
  }, [])
  
  

   //agregar el modal
  const handleNuevoGasto = () =>{

    setModal(true)
    setGastoEditar({})
    
    setTimeout(() =>{
      setAnimarModal(true)
    }, 700)

  }

  const guardarGasto = (gasto) =>{
   
    if(gasto.id){
      //actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
      setGastoEditar({});

    }else{
       //nuevo gsto
       gasto.id = generarId();  //se genero el id temporal
       gasto.fecha = Date.now();
       setGastos([...gastos, gasto])
    }
       setAnimarModal(false) 
       setTimeout(() =>{
       setAnimarModal(false)
    }, 700)
    
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }

  return (

    <div className={modal ? 'fijar' : ''}>
      <Header
           gastos = {gastos}
           setGastos ={setGastos}
           presupuesto= {presupuesto}
           setPresupuesto = {setPresupuesto}
           isValidPresupuesto = {isValidPresupuesto}
           setIsValidPresupuesto = {setIsValidPresupuesto}     
      />

      

      {isValidPresupuesto &&(
        <>
         <main>
              <Filtros
                  filtro = {filtro}
                  setFiltro = {setFiltro}
               
               />
              <ListadoGastos
              gastos = {gastos}
              setGastoEditar = {setGastoEditar}
              eliminarGasto ={ eliminarGasto}
              filtro = {filtro}
              gastosFiltrados = {gastosFiltrados}
              />
                
         </main>
         <div className='nuevo-gasto'>
               <img src={IconoNuevoGasto}
                    alt="icono nuevo"
                    onClick= {handleNuevoGasto} //funcion del icono de nuevo gasto
                />
              
        </div>

       </>// se crea el fragme como elemento padre
      )}

      {modal && <Modal 
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                guardarGasto ={guardarGasto}
                gastoEditar = {gastoEditar}
                setGastoEditar = {setGastoEditar}
                />}

      
    </div>
    
  )
}

export default App
