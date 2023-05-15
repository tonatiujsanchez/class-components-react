import { Component } from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'


class ModalContainer extends Component {


    static propTypes = {
        isModalOpen: PropTypes.bool,
        children: PropTypes.node
    }

    render(){

        if( ! this.props.isModalOpen ){
            return null
        }

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



    state = {
        isModalOpen: false
    }

    openModal = () => {
        this.setState({
            isModalOpen: true
        })
    }

    closedModal = () => {
        this.setState({
            isModalOpen: false
        })
    }

    render() {
        return (
            <div>
                <p>Portals App</p>
                <button 
                    onClick={ this.openModal }
                >
                    Abrir modal
                </button> 
                
                
                <ModalContainer isModalOpen={ this.state.isModalOpen}>
                    <p>Contenido modal</p>
                    <button 
                        onClick={ this.closedModal }
                    >
                        Cerrar modal
                    </button> 
                </ModalContainer>
            </div>
        )
    }
}

