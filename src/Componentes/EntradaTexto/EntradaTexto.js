import React from "react";
import './EntradaTexto.css';
import iconoMostrar from '../../Iconos/mostrar.svg';
import iconoOcultar from '../../Iconos/ocultar.svg';

export default class EntradaTexto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarContraseña: false,
            tipoEntrada: null
        }

        this.enfocarEntrada = this.enfocarEntrada.bind(this);
        this.enfocar = this.enfocar.bind(this);
        this.desenfocar = this.desenfocar.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);

        this.adorno = React.createRef();
        this.contenedor = React.createRef();
        this.etiqueta = React.createRef();
        this.entrada = React.createRef();
    }

    componentDidMount() {
        this.setState({tipoEntrada: this.props.type});
    }

    enfocarEntrada(evento) {
        this.entrada.current.focus();
    }

    enfocar(evento) {
        if (this.entrada.current.value === '') {
            this.etiqueta.current.animate([
                { transform: 'translateY(0)' },
                { transform: 'translateY(-0.5em)', offset: 0.99, opacity: 0 },
                { zIndex: '-1' }
            ], {
                duration: 300,
                iterations: 1,
                fill: 'forwards',
                easing: 'ease-in-out'
            });
            this.adorno.current.style.alignSelf = 'flex-start';
            this.adorno.current.animate([
                { width: '0' },
                { width: '100%' }
            ], {
                duration: 300,
                iterations: 1,
                fill: 'forwards',
                easing: 'ease-in-out'
            });
        }
        this.contenedor.current.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.3)';
    }

    desenfocar(evento) {
        if (this.entrada.current.value === '') {
            this.etiqueta.current.animate([
                { transform: 'translateY(0.5em)', opacity: 0},
                { transform: 'translateY(0)', opacity: 1, zIndex: '1' }
            ], {
                duration: 300,
                iterations: 1,
                fill: 'forwards',
                easing: 'ease-in-out'
            });
            this.adorno.current.style.alignSelf = 'flex-end';
            this.adorno.current.animate([
                { width: '100%' },
                { width: '0'}
            ], {
                duration: 300,
                iterations: 1,
                fill: 'forwards',
                easing: 'ease-in-out'
            });
        }
        else {
            if (this.entrada.current.type == 'email') {
                let exRegEmail = /[a-zA-Z0-9]+@[a-zA-Z]+(\.[a-zA-Z]+)+/;
                if (!exRegEmail.test(this.entrada.current.value)) {
                    this.adorno.current.style.backgroundColor = 'var(--color-enfasis)';
                }
            }
        }
        this.contenedor.current.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0)';
    }

    mostrarOjo() {
        let icono = this.state.mostrarContraseña ? iconoOcultar : iconoMostrar;
        return <img className={this.state.mostrarContraseña ? 'filtro-mostrar' : 'filtro-ocultar'} style={{height: '2em', position: 'absolute', top: '0.9em', right: '0.5em'}} src={icono} onClick={() => this.setState({mostrarContraseña: !this.state.mostrarContraseña, tipoEntrada: this.state.mostrarContraseña ? 'password' : 'text'})} />;
    }

    onKeyPress(evento) {
        if (evento.key == 'Enter' && this.props.funcionBuscar)
            this.props.funcionBuscar();
    }

    render() {
        return (
            <div className="contenedor-entrada" ref={this.contenedor} style={{width:this.props.width}} >
                <label className="etiqueta" ref={this.etiqueta} htmlFor={this.props.name} onClick={this.enfocarEntrada}>{this.props.label}</label>
                <input ref={this.entrada} name={this.props.name} className="entrada-base" onFocus={this.enfocar} onBlur={this.desenfocar} onChange={this.props.onChange} onKeyPress={this.onKeyPress} type={this.state.tipoEntrada} />
                {this.props.type == 'password' ? this.mostrarOjo() : null}
                <div className="adorno" ref={this.adorno}></div>
            </div>
        );
    }
}