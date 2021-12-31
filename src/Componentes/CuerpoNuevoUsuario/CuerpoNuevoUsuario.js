import React from "react";
import '../CuerpoNuevoUsuario/CuerpoNuevoUsuario.css'

class CuerpoNuevoUsuario extends React.Component{
    constructor(props){
        super(props);

        this.mostrarPass = this.mostrarPass.bind(this);
    }

    mostrarPass(){
        let pass = document.getElementById("pass")
        if(pass.type == "password"){
            pass.type = "text";
        }
        else{
            pass.type = "password"
        }
    }

    render(){
        return(
            <div className="contenedor-nuevo-usuario animacion-flotar-abajo">
                <div className="boton-usuario">
                    <h2 className="titulo-agregarU">Agregar nuevo usuario</h2>
                    <button className="boton-agregarU">Agregar nuevo Usuario</button>    
                </div>
                <div className="cuerpo-agregar-usuario">
                    <label className="titulos-cuerpo-usuario">Nombre:</label>
                    <input className="in-usuario" placeholder="Nombre de usuario"></input>
                    <label className="titulos-cuerpo-usuario">Apellidos:</label>
                    <input className="in-usuario" placeholder="Apellidos"></input>
                    <label className="titulos-cuerpo-usuario">Correo electrónico:</label>
                    <input className="in-usuario" placeholder="Correo electrónico"></input> 
                    <label className="titulos-cuerpo-usuario">Rol de usuario:</label>
                    <select className="in-usuario">
                        <option value={"Administrador"}>Administrador</option>
                        <option value={"Maestro"}>Maestro</option>
                    </select> 
                    <label className="titulos-cuerpo-usuario">Contraseña:</label>
                    <div style={{display:"flex", alignItems:"center"}} >
                    <input style={{margin:"0"}} id="pass" type={"password"} className="in-usuario" placeholder="Contraseña"></input>
                    <input type={"checkbox"} onClick={this.mostrarPass} ></input> 
                    <p style={{fontFamily:"Oswald", margin:"0"}} >Mostrar</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default CuerpoNuevoUsuario;
