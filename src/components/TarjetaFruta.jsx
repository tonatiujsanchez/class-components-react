import React from 'react'
import './TarjetaFruta.css'

export class TarjetaFruta extends React.Component {

    // constructor() {
    //     super()
    //     // this.agregar = this.agregar.bind(this)
    //     // this.quitar = this.quitar.bind(this)

    //     const METHODS = [
    //         'agregar',
    //         'quitar',
    //         'limpiar',
    //     ]

    //     METHODS.forEach(method => {
    //         this[method] = this[method].bind(this)
    //     });

    //     this.state = {
    //         cantidad: 7
    //     }
    // }

    // agregar() {
    //     this.setState({
    //         cantidad: this.state.cantidad + 1
    //     })
    // }
    // quitar(){
    //     this.setState({
    //         cantidad: this.state.cantidad - 1
    //     })
    // }
    // limpiar(){
    //     this.setState({
    //         cantidad: 0
    //     })
    // }

    state = {
        cantidad: 7
    }

    agregar = () => {
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }
    quitar = () => {
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    }
    limpiar = () =>{
        this.setState({
            cantidad: 0
        })
    }


    render() {

        const hasItems =  this.state.cantidad > 0 
        const clases = `TarjetaFruta ${ hasItems ? 'TarjetaFruta-active':'' }`

        return (
            <div className={ clases }>
                <h1>{this.props.name}</h1>
                <hr />
                <div>Cantidad: { this.state.cantidad }</div>
                <button onClick={this.agregar} > Agregar + </button>
                <button onClick={this.quitar} > Quitar - </button>
                <button onClick={this.limpiar} > Limpiar </button>

                <p>{this.props.price}</p>

                <p>
                    Total: ${ this.props.price * this.state.cantidad }
                </p>
            </div>
        )
    }

}