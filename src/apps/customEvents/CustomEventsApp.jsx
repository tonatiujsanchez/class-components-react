import { Component } from 'react'
import PropTypes from 'prop-types'

import './CustomEventsApp.css'


export class ComponentChild extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        onShowAlert: PropTypes.func
    }

    static defaultProps = {
        title: 'Sin nombre',
        onShowAlert: ()=>{}
    }


    handleClick = () => {
        this.props.onShowAlert(`Hola desde el componente ${ this.props.title }`)
    }

    render(){
        return(
            <div 
                onClick={ this.handleClick }
                className="hijo"
            >
                <h2>{ this.props.title }</h2>
            </div>
        )
    }

}


export class CustomEventsApp extends Component {


    onShowAlert = (text) => {
        alert(text);
    }

    render(){
        return(
            <div className="padre">
                <ComponentChild 
                    title="Hijo 1 🍕"
                    onShowAlert={ this.onShowAlert }
                />
                <ComponentChild 
                    title="Hijo 2 🍔"
                    onShowAlert={ this.onShowAlert }

                />
                <ComponentChild 
                    title="Hijo 3 🌭"
                    onShowAlert={ this.onShowAlert }

                />
            </div>
        )
    }
}