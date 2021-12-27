import React from "react";
import './TablaObjetos.css';
import iconoEliminar from '../../Iconos/Eliminar.svg'
import iconoEditar from '../../Iconos/Personalizar.svg'

class TablaObjetos extends React.Component{
    constructor(props){
        super(props);
    }

    generarEncabezado(){
        let encabezados = [];
        let columna = 0;
        for (let encabezado of this.props.encabezados){
            if(columna === 0){
                encabezados.push(<div className="encabezadoN"> {encabezado} </div>)
            }
            else if(columna === 1){
                encabezados.push(<div className="encabezadoD"> {encabezado} </div>)
            }
            else {
                encabezados.push(<div className="encabezadoT"> {encabezado} </div>)
            }
            columna ++;
        }
        if(this.props.botones){
            return (
                <div className="encabezado">
                    {encabezados}
                    <div className="invisibles boton iconoE" > <img src = {iconoEliminar} style={{"width":"20px"}} /> </div>
                    <div className="invisibles boton" > <img src = {iconoEliminar} style={{"width":"17px"}} /> </div>
                </div>
            )
        }
        else {
            return (
                <div className="encabezado"> {encabezados} </div>
            )
        }

    }
    generarFilas(){
        let filas = [];
        if (this.props.datos.objetos_encontrados) {
            for(let objeto of this.props.datos.objetos_encontrados){
                let columnas = [];
                columnas.push(<div className="columnaN animacion-flotar-abajo"> {objeto.nombre} </div>)
                columnas.push(<div className="columnaD animacion-flotar-abajo"> {objeto.descripcion} </div>)
                columnas.push(<div className="columnaT animacion-flotar-abajo"> {objeto.temas.join(', ')} </div>)
                
                if(this.props.botones){
                    filas.push(
                        <div className="encabezado">
                            {columnas}
                            <div className="boton iconoE"> <img  src = {iconoEditar} style={{"width":"20px"}} /> </div>
                            <div className="boton iconoD"> <img  src = {iconoEliminar} style={{"width":"17px", "margin-left":".1em"}} /> </div>
                        </div>)
                }
                else {
                    filas.push(
                        <div className="encabezado"> {columnas} </div>)
                }
    
            }
        }
        return filas;
    }

    render(){
        return (
            <div className = {"tabla-objetos animacion-flotar-abajo"}>
                {this.generarEncabezado()}
                {this.generarFilas()}
            </div>
        )
    }
}

export default TablaObjetos;