import { Component } from "react"


const styles = {
    height:'200px',
    background: 'gold',
    padding: '1em',
    boxSizing: 'border-box'
}

export class EventsApp extends Component {

    state = {
        x: 0,
        y: 0,
        inputText: ''
    }



    manejador = (event) => {
        this.setState({
            ...this.state,
            x: event.clientX,
            y: event.clientY,
        })
    }

    manejadorInput = (event) => {
       this.setState((prevState)=>{

        return {
            ...prevState,
            inputText: event.target.value
           }
       });
    }

    tipoDeEvento = (event) => {
        console.log(event.type);
    }

    render(){
        return (
            <>
                <div 
                    style={ styles }
                    onMouseMove={this.manejador}
                >
                    { JSON.stringify( this.state, null, 4 ) }
                </div>
                <hr />
                <div>
                    <input 
                        onChange={this.manejadorInput}
                        value={ this.state.inputText }
                        onCopy={this.tipoDeEvento} 
                        onPaste={this.tipoDeEvento}
                        onCut={this.tipoDeEvento}
                        type="text"
                    />
                </div>
            </>
        )
    }
}