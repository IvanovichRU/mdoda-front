import React from "react"
import "./CuerpoAgregarObjeto.css"
import ChipsTemas from "../ChipsTemas/ChipsTemas";
import iconoAgregar from './../../Iconos/Agregar.svg';
import axios from "axios";
import { withCookies } from "react-cookie";


class CuerpoAgregarObjeto extends React.Component {
    constructor(props) {
        super(props);
        this.materiales = [];
        this.sacarTemas = React.createRef();

        this.agregarMaterial = this.agregarMaterial.bind(this);
        this.guardarObjeto = this.guardarObjeto.bind(this);

    }

    guardarObjeto(evento) {
        const datosParaBackend = {
            nombre: document.getElementById('nombre-objeto').value,
            descripcion: document.getElementById('desc-objeto').value,
            nivel: document.getElementById('nivel-objeto').value,
            granularidad: document.getElementById('granularidad-objeto').value,
            perfil: document.getElementById('perfil-objeto').value,
            objetivo: document.getElementById('objetivo-objeto').value,
            temas: this.sacarTemas.current.state.chips,
            materiales: this.materiales,
            autor: this.props.usuario._id
        }
        const valores = Object.values(datosParaBackend);
        for (const valor of valores) {
            if (typeof valor === 'string') {
                if (valor === "") {
                    alert("Completa los campos");
                    return;
                }
            }
            else {
                if (valor.length === 0) {
                    alert("Completa los campos");
                    return;
                }
            }
        }
        axios.post("http://localhost:8000/manejador/registrar_objeto",
            datosParaBackend,
            {
            headers: {'X-CSRFToken': this.props.cookies.get('csrftoken')},
            withCredentials: true
            }
        ).catch((razon)=>{
            alert("error")
        }).then((respuesta) => {
            alert("Exito");
        })
    }

    agregarMaterial(evento) {
        const entradaTipo = document.getElementById('tipo-material');
        const entradaFuente = document.getElementById('fuente-material');
        
        if(entradaTipo.value === "" || entradaFuente.value === ""){
            alert("Completa los materiales");
            return;
        }

        this.materiales.push({
            tipo: entradaTipo.value,
            fuente: entradaFuente.value
        });
        entradaTipo.value = '';
        entradaFuente.value = '';
        alert('Material agregado.');
    }

    render() {
        return (
            <div className="cuerpo-agregar-objeto animacion-flotar-abajo">
                <div className="contenedor-titulo-boton">
                    <h2 className="titulo-agregar-objeto">Agregar Nuevo Objeto de Aprendizaje  </h2>
                    <div onClick={this.guardarObjeto} className="boton-agregar"><p className="texto-agregar-boton">Guardar Objeto de Aprendizaje</p> <img src={iconoAgregar} style={{ "width": "15%", "marginRight": "5%" }} /> </div>
                    <div className="boton-cancelar" onClick={this.props.funcionCambiarPantalla} >Cancelar</div>
                </div>
                <div className="contenedor-modulos-datos">
                    <div className="contenedor-datos-generales">
                        <p className="titulos-objetos"><strong>Datos Generales</strong></p>
                        <p className="objeto-aprendizaje">Nombre del Objeto de Aprendizaje:</p>
                        <input id="nombre-objeto" className="input-aprendizaje" placeholder="Nombre del Objeto de Aprendizaje"></input>
                        <p className="descripcion-objeto-aprendizaje">Descripción:</p>
                        <textarea id="desc-objeto" className="input-descripcion-aprendizaje" placeholder="Descripción" ></textarea>
                        <p className="objeto-aprendizaje">Nivel:</p>
                        <select id="nivel-objeto" className="input-aprendizaje" >
                            <option value="">Seleccione un nivel</option>
                            <option value="1">Preparatoria</option>
                            <option value="2">Licenciatura</option>
                            <option value="3">Maestría</option>
                            <option value="4">Doctorado</option>
                        </select>
                        <p className="objeto-aprendizaje">Granularidad:</p>
                        <select id="granularidad-objeto" className="input-aprendizaje" >
                            <option value="">Seleccione un nivel de Granularidad</option>
                            <option value="1">Carrera</option>
                            <option value="2">Materia</option>
                            <option value="3">Tema</option>
                            <option value="4">Subtema</option>
                        </select>
                        <p className="objeto-aprendizaje">Perfil:</p>
                        <input id="perfil-objeto" className="input-aprendizaje" placeholder="Perfil"></input>
                        <p className="objeto-aprendizaje">Objetivo de Aprendizaje:</p>
                        <textarea id="objetivo-objeto" className="input-aprendizaje" placeholder="Objetivo de Aprendizaje"></textarea>
                    </div>
                    <div className="contenedor-materiales-temas">
                        <div className="contenedor-temas-objetos">
                            <p className="titulos-objetos"><strong>Temas</strong></p>
                            <div className="chips-objetos" ><ChipsTemas placeholder="Temas" ref={this.sacarTemas} /></div>
                        </div>
                        <div className="contenedor-materiales-objetos">
                            <p className="titulos-objetos"><strong>Materiales</strong></p>
                            <div className="contenedor-fuente-tipo">
                                <p className="objeto-aprendizaje">Tipo de Material:</p>
                                <input id="tipo-material" className="input-aprendizaje" placeholder="Tipo de Material"></input>
                                <p className="objeto-aprendizaje">Fuente:</p>
                                <input id="fuente-material" className="input-aprendizaje" placeholder="Fuente"></input>
                                <button onClick={this.agregarMaterial} className="boton-agregar-material"> Agregar Material </button>
                            </div>
                            <div className="contenedor-boton-subir">
                                <button className="boton-subir">Subir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withCookies(CuerpoAgregarObjeto);