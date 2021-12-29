import React from "react"
import "./CuerpoPerfil.css"

class CuerpoPerfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: this.props.usuario
        }
    }

    componentWillReceiveProps(siguientesProps) {
        if (this.props != siguientesProps) {
            this.setState({
                usuario: siguientesProps.usuario
            });
        }
    }

    componentDidMount() {
        console.log(this.state.usuario)
        this.props.refrescarUsuario();
    }

    render() {
        return (
            <div className="cuerpo-perfil animacion-flotar-abajo">
                <div className="contenedor-titulo-perfil-boton">
                    <h2 className="titulo-perfil">Perfil</h2>
                    <button className="boton-editar">Eliminar</button>
                    <button className="boton-cambiar-contraseña">Cambiar Contraseña</button>
                </div>
                <div className="contenedor-informacion-perfil">
                    <label className="p-titulo">Nombre:</label>
                    <label className="p-contenido"> {this.state.usuario.nombre} {this.state.usuario.apellidos} </label>
                    <label className="p-titulo">Email:</label>
                    <label className="p-contenido"> {this.state.usuario.email} </label>
                    <label className="p-titulo">Rol:</label>
                    <label className="p-contenido"> {this.state.usuario.tipo} </label>
                    <label className="p-titulo">Objetos:</label>
                    <label className="p-contenidoE"> {this.state.usuario.objetos} <label className="p-contenidoE"> <span onClick={() => this.props.funcion("MisObjetos")} className="ver-objeto">Ver Objetos</span> </label> </label>
                </div>
            </div>
        );
    }
}

export default CuerpoPerfil;