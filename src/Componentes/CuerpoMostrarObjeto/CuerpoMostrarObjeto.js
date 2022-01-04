import axios from "axios";
import React from "react";

class CuerpoMostrarObjeto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objeto: null
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/manejador/arreglar_csrf/')
        .then((respuesta) => {alert('Exito')})
        .catch(razon => {alert(razon)});
        this.setState({ objeto: this.props.objeto });
    }

    convertirNivel(cadenaNivel) {
        switch (cadenaNivel) {
            case '1':
                return 'Preparatoria';
            case '2':
                return 'Licenciatura';
            case '3':
                return 'Maestría';
            case '4':
                return 'Doctorado';
            default:
                break;
        }
    }

    convertirGranularidad(cadenaGranularidad) {
        switch (cadenaGranularidad) {
            case '1':
                return 'Carrera';
            case '2':
                return 'Materia';
            case '3':
                return 'Tema';
            case '4':
                return 'Subtema';
            default:
                break;
        }
    }

    hacerTemas() {
        let temas = [];
        let cuenta = 0;
        for (const tema of this.state.objeto.temas) {
            temas.push(<span key={'tema-'+cuenta} className="span-tema">{tema}</span>);
            cuenta++;
        }
        return temas;
    }

    hacerMateriales() {
        let materiales = [];
        let cuenta = 0;
        for (const material of this.state.objeto.materiales) {
            materiales.push(<span key={'material-'+cuenta} className="span-tema" style={{backgroundColor: 'var(--color-alterno2)'}}>{material.fuente + '.' + material.tipo}</span>);
            cuenta++;
        }
        return materiales;
    }

    render() {
        if (this.state.objeto != null) {
            return (
                <div className="cuerpo-agregar-objeto animacion-flotar-abajo">
                    <div className="contenedor-titulo-boton">
                        <h2 className="titulo-agregar-objeto">{this.props.objeto.nombre}</h2>
                    </div>
                    <div className="contenedor-modulos-datos">
                        <div className="contenedor-columna">
                            <h3 className="titulos-objetos">Datos Generales</h3>
                            <section>
                                <label className="etiqueta-nuevo-objeto">Descripción:</label>
                                <p> {this.state.objeto.descripcion} </p>
                            </section>
                            <section>
                                <label className="etiqueta-nuevo-objeto">Nivel:</label>
                                <p> {this.convertirNivel(this.state.objeto.nivel)} </p>
                            </section>
                            <section>
                                <label htmlFor="granularidad-objeto" className="etiqueta-nuevo-objeto">Granularidad:</label>
                                <p> {this.convertirGranularidad(this.state.objeto.granularidad)} </p>
                            </section>
                            <section>
                                <label htmlFor="perfil-objeto" className="etiqueta-nuevo-objeto">Perfil:</label>
                                <p> {this.state.objeto.perfil} </p>
                            </section>
                            <section>
                                <label htmlFor="objetivo-objeto" className="etiqueta-nuevo-objeto">Objetivo de Aprendizaje:</label>
                                <p> {this.state.objeto.objetivo} </p>
                            </section>
                        </div>
                        <div className="contenedor-columna">
                            <div className="contenedor-temas-objetos">
                                <h3 className="titulos-objetos">Temas</h3>
                                <div className="contenedor-temas">
                                    {this.hacerTemas()}
                                </div>
                            </div>
                            <div className="contenedor-materiales-objetos">
                                <h3 className="titulos-objetos">Materiales</h3>
                                <div className="contenedor-temas">
                                    {this.hacerMateriales()}
                                </div>
                            </div>
                            <div className="contenedor-boton-subir">
                                <button className="boton-cancelar" onClick={this.props.funcionCambiarPantalla} >ATRÁS</button>
                                <button className="boton-subir"><a style={{all: 'unset'}} href={"http://localhost:8000/manejador/descargar_objeto?_id=" + this.state.objeto._id}>DESCARGAR</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default CuerpoMostrarObjeto;