import React from "react"
import "./CuerpoAgregarObjeto.css"
import ChipsTemas from "../ChipsTemas/ChipsTemas";
import axios from "axios";
import { withCookies } from "react-cookie";


class CuerpoAgregarObjeto extends React.Component {
    constructor(props) {
        super(props);
        this.materiales = [];

        this.sacarTemas = React.createRef();

        this.agregarMaterial = this.agregarMaterial.bind(this);
        this.subirZip = this.subirZip.bind(this);
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

    subirZip(evento) {
        const zipASubir = evento.target.files[0];
        const datosParaBackend = {
            nombre: document.getElementById('nombre-objeto').value,
            descripcion: document.getElementById('desc-objeto').value,
            nivel: document.getElementById('nivel-objeto').value,
            granularidad: document.getElementById('granularidad-objeto').value,
            perfil: document.getElementById('perfil-objeto').value,
            objetivo: document.getElementById('objetivo-objeto').value,
            temas: this.sacarTemas.current.state.chips,
            materiales: this.materiales,
            autor: {_id: this.props.usuario._id, tipo: this.props.usuario.tipo }
        };
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
        let datosAEnviar = new FormData();
        datosAEnviar.append('zip', zipASubir);
        datosAEnviar.append('datos', JSON.stringify(datosParaBackend));
        axios.post("http://localhost:8000/manejador/registrar_objeto",
            datosAEnviar,
            {
            headers: {'X-CSRFToken': this.props.cookies.get('csrftoken'), 'Content-Type': 'multipart/form-data'},
            withCredentials: true
            }
        ).catch((razon)=>{
            alert("error")
        }).then((respuesta) => {
            alert("Exito");
            this.props.funcionCambiarPantalla();
        });
    }

    render() {
        return (
            <div className="cuerpo-agregar-objeto animacion-flotar-abajo">
                <div className="contenedor-titulo-boton">
                    <h2 className="titulo-agregar-objeto">Agregar Nuevo Objeto de Aprendizaje  </h2>
                </div>
                <div className="contenedor-modulos-datos">
                    <div className="contenedor-columna">
                        <h3 className="titulos-objetos">Datos Generales</h3>
                        <section>
                            <label className="etiqueta-nuevo-objeto">Nombre del Objeto de Aprendizaje:</label>
                            <input id="nombre-objeto" className="input-aprendizaje" placeholder="Nombre del Objeto de Aprendizaje"></input>
                        </section>
                        <section>
                            <label className="etiqueta-nuevo-objeto">Descripción:</label>
                            <textarea id="desc-objeto" className="input-aprendizaje" placeholder="Descripción" ></textarea>
                        </section>
                        <section>
                            <label className="etiqueta-nuevo-objeto">Nivel:</label>
                            <select id="nivel-objeto" className="input-aprendizaje" >
                                <option value="">Seleccione un nivel</option>
                                <option value="1">Preparatoria</option>
                                <option value="2">Licenciatura</option>
                                <option value="3">Maestría</option>
                                <option value="4">Doctorado</option>
                            </select>
                        </section>
                        <section>
                            <label htmlFor="granularidad-objeto" className="etiqueta-nuevo-objeto">Granularidad:</label>
                            <select id="granularidad-objeto" className="input-aprendizaje" >
                                <option value="">Seleccione un nivel de Granularidad</option>
                                <option value="1">Carrera</option>
                                <option value="2">Materia</option>
                                <option value="3">Tema</option>
                                <option value="4">Subtema</option>
                            </select>
                        </section>
                        <section>
                            <label htmlFor="perfil-objeto" className="etiqueta-nuevo-objeto">Perfil:</label>
                            <input id="perfil-objeto" className="input-aprendizaje" placeholder="Perfil"></input>
                        </section>
                        <section>
                            <label htmlFor="objetivo-objeto" className="etiqueta-nuevo-objeto">Objetivo de Aprendizaje:</label>
                            <textarea id="objetivo-objeto" className="input-aprendizaje" placeholder="Objetivo de Aprendizaje"></textarea>
                        </section>
                    </div>
                    <div className="contenedor-columna">
                        <div className="contenedor-temas-objetos">
                            <h3 className="titulos-objetos">Temas</h3>
                            <ChipsTemas placeholder="Temas" ref={this.sacarTemas} />
                        </div>
                        <div className="contenedor-materiales-objetos">
                            <h3 className="titulos-objetos">Materiales</h3>
                            <section>
                                <label className="etiqueta-nuevo-objeto">Tipo de Material:</label>
                                <input id="tipo-material" className="input-aprendizaje" placeholder="Tipo de Material"></input>
                            </section>
                            <section>
                                <label className="etiqueta-nuevo-objeto">Fuente:</label>
                                <input id="fuente-material" className="input-aprendizaje" placeholder="Fuente"></input>
                            </section>
                            <button onClick={this.agregarMaterial} className="boton-agregar-material">AGREGAR MATERIAL</button>
                        </div>
                        <div className="contenedor-boton-subir">
                            <input type={'file'} onChange={this.subirZip} accept=".zip, .rar, .7zip" id="archivo-zip" style={{display: 'none'}} />
                            <button className="boton-cancelar" onClick={this.props.funcionCambiarPantalla} >CANCELAR</button>
                            <button className="boton-subir" onClick={() => {document.getElementById('archivo-zip').click()}}>SUBIR Y GUARDAR</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withCookies(CuerpoAgregarObjeto);