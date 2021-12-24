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
        let objetos = [
            {
                nombre:"Computación en la nube",
                desc:"Objeto de aprendizaje con informacion sobre la computacion en la nubeObjeto de aprendizaje con informacion sobre la computacion en la nubeObjeto de aprendizaje con informacion sobre la computacion en la nubeObjeto de aprendizaje con informacion sobre la computacion en la nubeObjeto de aprendizaje con informacion sobre la computacion en la nubeObjeto de aprendizaje con informacion sobre la computacion en la nubeObjeto de aprendizaje con informacion sobre la computacion en la nubeObjeto de aprendizaje con informacion sobre la computacion en la nubeObjeto de aprendizaje con informacion sobre la computacion en la nube",
                temas:"Computacion en la nube, Computacion, nube"
            },
            {
                nombre:"Vision por computadora",
                desc:"La inteligencia artificial en la vision por computadora",
                temas:"Vision por computadora, vision, computadora"
            },
            {
                nombre:"Bucles en peython",
                desc:"Bucles utilizados en el lenguaje de peython",
                temas:"Bucles en peython, bucles, peython"
            },
            {
                nombre:"Bucles en peython",
                desc:"Bucles utilizados en el lenguaje de peython",
                temas:"Bucles en peython, bucles, peython"
            },
            {
                nombre:"Bucles en peython",
                desc:"Bucles utilizados en el lenguaje de peython",
                temas:"Bucles en peython, bucles, peython"
            },
            {
                nombre:"Bucles en peython",
                desc:"Bucles utilizados en el lenguaje de peython",
                temas:"Bucles en peython, bucles, peython"
            },
            {
                nombre:"Bucles en peython",
                desc:"Bucles utilizados en el lenguaje de peython",
                temas:"Bucles en peython, bucles, peython"
            },
            {
                nombre:"Bucles en peython",
                desc:"Bucles utilizados en el lenguaje de peython",
                temas:"Bucles en peython, bucles, peython"
            },
            {
                nombre:"Bucles en peython",
                desc:"Bucles utilizados en el lenguaje de peython",
                temas:"Bucles en peython, bucles, peython"
            },
            {
                nombre:"Bucles en peython",
                desc:"Bucles utilizados en el lenguaje de peython",
                temas:"Bucles en peython, bucles, peython"
            },
            {
                nombre:"Bucles en peython",
                desc:"Bucles utilizados en el lenguaje de peython",
                temas:"Bucles en peython, bucles, peython"
            },
            {
                nombre:"Bucles en peython",
                desc:"Bucles utilizados en el lenguaje de peython",
                temas:"Bucles en peython, bucles, peython"
            },
            {
                nombre:"Bucles en peython",
                desc:"Bucles utilizados en el lenguaje de peython",
                temas:"Bucles en peython, bucles, peython"
            }
        ];
        let filas = [];
        
        for(let objeto of objetos){
            let columnas = [];
            columnas.push(<div className="columnaN"> {objeto.nombre} </div>)
            columnas.push(<div className="columnaD"> {objeto.desc} </div>)
            columnas.push(<div className="columnaT"> {objeto.temas} </div>)
            
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
        return filas;
    }

    render(){
        return (
            <div className = "tabla-objetos animacion-flotar-abajo">
                {this.generarEncabezado()}
                {this.generarFilas()}
            </div>
        )
    }
}

export default TablaObjetos;