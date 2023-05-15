import { Component } from 'react'
import ReactDOM from 'react-dom'


class ModalContainer extends Component {
    render(){



        return ReactDOM.createPortal((
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'  
                }}
            >
                <div
                    style={{
                        background: '#FFF',
                        padding: '1rem',
                        minWidth: '400px',
                        minHeight: '450px',
                        borderRadius: '0.3rem'
                    }}
                >
                    <h1>Portal</h1>
                    <hr />
                    { this.props.children }
                </div>
            </div>
        ), document.getElementById('modal-root'))
    }
}


export class PortalsApp extends Component {

    render() {
        return (
            <div>
                <p>Portals-App</p> 
                <ModalContainer>
                    <p>Contenido modal</p>
                </ModalContainer>
            </div>
        )
    }
}

