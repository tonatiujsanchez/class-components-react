import { Component } from "react";



export class MarcadoHtmlApp extends Component {

    state = {
        marcado: `
            <h1>Marcado HTML</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet.</p>
            <div>
                <strong>Por:</strong><span>Ton J.</span>
            </div>
            <a href="#">Ver</a>

        `
    }

    render(){
        return(
            <div style={{
                maxWidth: '600px',
                margin: '0 auto',
                border: '1px solid #222',
                borderRadius: '0.3rem',
                padding: '1rem'
            }}>
                <div
                    dangerouslySetInnerHTML={{
                        __html: this.state.marcado
                    }}
                >

                </div>
            </div>
        )
    }

} 