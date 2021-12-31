import React from "react";
import './TablaObjetos.css';
import iconoEliminar from '../../Iconos/Eliminar.svg'
import iconoEditar from '../../Iconos/Personalizar.svg'

class TablaObjetos extends React.Component {
    constructor(props) {
        super(props);
    }

    generarEncabezado() {
        let encabezados = [];
        let columna = 0;
        for (let encabezado of this.props.encabezados) {
            if (columna === 0) {
                encabezados.push(<div key='e1' className="encabezado"> {encabezado} </div>)
            }
            else if (columna === 1) {
                encabezados.push(<div key='e2' className="encabezado"> {encabezado} </div>)
            }
            else {
                encabezados.push(<div key='e3' className="encabezado"> {encabezado} </div>)
            }
            columna++;
        }
        if (this.props.botones) {
            return (
                <div className="fila">
                    {encabezados}
                    <div className="invisibles boton iconoE" > <img src={iconoEliminar} style={{ "width": "20px" }} /> </div>
                    <div className="invisibles boton" > <img src={iconoEliminar} style={{ "width": "17px" }} /> </div>
                </div>
            )
        }
        else {
            return (
                <div className="fila"> {encabezados} </div>
            )
        }

    }
    generarFilas() {
        let filas = [];
        if (this.props.datos.objetos_encontrados) {
            let botonesCounter = 0;
            for (let objeto of this.props.datos.objetos_encontrados) {
                let columnas = [];
                let spansTemas = [];
                for (let tema of objeto.temas) {
                    spansTemas.push(<span>{tema}</span>);
                }
                columnas.push(<div key='c1' className="columna animacion-flotar-abajo"> {objeto.nombre} </div>)
                columnas.push(<div key='c2' className="columna animacion-flotar-abajo" style={{ textAlign: 'justify' }}> {objeto.descripcion} </div>)
                columnas.push(<div key='c3' className="columna animacion-flotar-abajo" style={{ justifyContent: 'center' }}> <div className="contenedor-temas">{spansTemas}</div> </div>)

                if (this.props.botones) {
                    filas.push(
                        <div key={'c' + botonesCounter} className="fila-datos">
                            {columnas}
                            <div className="boton iconoE"> <img src={iconoEditar} style={{ "width": "20px" }} /> </div>
                            <div className="boton iconoD"> <img src={iconoEliminar} style={{ "width": "17px", "margin-left": ".1em" }} /> </div>
                        </div>)
                }
                else {
                    filas.push(
                        <div key='c5' className="fila-datos"> {columnas} </div>)
                }
                botonesCounter++;
            }
        }
        return filas;
    }

    render() {
        return (
            <div className={"tabla-objetos animacion-flotar-abajo"}>
                {this.generarEncabezado()}
                {this.generarFilas()}
            </div>
        )
    }
}

export default TablaObjetos;