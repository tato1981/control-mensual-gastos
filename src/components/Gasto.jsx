
import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,

}from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import { formatearFecha } from '../helpers'

import IconoAhorros from '../img/icono_ahorros.jpg'
import IconoAlimentos from '../img/icono_alimentos.jpg'
import IconoTransporte from '../img/icono_transporte.jpg'
import IconoCreditoFinanciero from '../img/icono_credito_financiero.jpg'
import IconoServiciosPublicos from '../img/icono_servicios_publicos.jpg'
import IconoDiversion from '../img/icono_diversion.jpg'
import IconoSalud from '../img/icono_salud.jpg'
import IconoVeterinaria from '../img/icono_veterinaria.jpg'
import IconoSuscripciones from '../img/icono_suscripciones.jpg'

const diccionarioIconos = {
                    ahorros: IconoAhorros,
                    alimentos: IconoAlimentos,
                    transporte: IconoTransporte,
                    credito_financiero:   IconoCreditoFinanciero,
                    Servicios_publicos: IconoServiciosPublicos,
                    diversion:   IconoDiversion,
                    salud:  IconoSalud,
                    veterinaria:  IconoVeterinaria,
                    suscripciones: IconoSuscripciones
}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {

     const {categoria, nombre, cantidad, id, fecha} = gasto

     const leadingActions = () => (      //funcion con () siginfica que muestra el siguiente componente
      <LeadingActions>
         <SwipeAction onClick={() => setGastoEditar(gasto)}>
              Editar
         </SwipeAction>
      </LeadingActions>
     )

     const trailingActions = () => (
      <TrailingActions>
        <SwipeAction onClick={() => eliminarGasto(id)}
                     destructive={true}>
            Eliminar
        </SwipeAction>
      </TrailingActions>
     )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions= {trailingActions()}
    >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
                <img
                      src={diccionarioIconos[categoria]}
                      alt="Icono Gastos"
                
                />
              <div className='descripcion-gasto'>
                <p className='categoria'>{categoria}</p>
                <p className='nombre-gasto'>{nombre}</p>           
                <p className='fecha-gasto'>
                    Agregado el: {''}
                    <span>{formatearFecha(fecha)}</span>
                </p>           
              </div>         
          </div>
          <p className='cantidad-gasto'>${cantidad}</p> 
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto
