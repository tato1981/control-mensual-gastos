import {useState, useEffect} from 'react'



const filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form >
             <div className='campo'>
                <label >Filtrar Gastos</label>
                <select
                      value={filtro}
                      onChange = {e => setFiltro(e.target.value)}>
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

        </form>
      
    </div>
  )
}

export default filtros
