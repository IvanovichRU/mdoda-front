import React from "react";
import '../CuerpoInformacionOA/CuerpoInformacionOA.css'

class CuerpoInformacionOA extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="contenedor-ioa">
                <div className="contenedor-titulo-perfil-boton">
                    <h2 className="titulo-oa">Información de Objeto de Aprendizaje</h2>
                </div>
                <div className="contenedor-datos-oa">
                    <div className="datos-generales">
                        <label className="titulo-d"> Nombre:</label>
                        <label> Nombre alv </label>
                        <label className="titulo-d"> Descripción: </label>
                        <p className="descripcion-oa"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. </p>
                        <label className="titulo-d"> Nivel: </label>
                        <label> nivel alv </label>
                        <label className="titulo-d"> Granularidad: </label>
                        <label> Tu culo </label>
                        <label className="titulo-d"> Perfil: </label>
                        <label> Albañil </label>
                    </div>
                    <div className="contenedor-temas-materiales">
                        <div className="body-temas">
                            <label className="titulo-d"> Temas: </label>
                        </div>
                        <div className="body-materiales">
                            <label className="titulo-d"> Materiales: </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
export default CuerpoInformacionOA; 