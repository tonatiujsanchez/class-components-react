import React from 'react'


const Gato = (props) => (
    <div>
        <h1>Gato🐱</h1>
        <pre>
            { JSON.stringify( props, null, 4 ) }
        </pre>
    </div>
)




export class Counter extends React.Component {

    state = {
        video: {
            title: 'Super video',
            likes: 0
        }
    }

    add = () => {
        this.setState((state, props) => (
            {
                video: {
                    ...state.video,
                    likes: state.video.likes + 1
                }
            }
        ))
    }


    

    render() {

        const datosDelGato = {
            raza: 'Tropical',
            pelasNocturnas: 3000,
        }

        return (
            <div>
                <h1>{ this.state.video.title }</h1>
                <button onClick={this.add}>
                    Click: ({this.state.video.likes})
                </button>

                <hr />
                <Gato
                    name='Garfield'
                    age='2 años'
                    { ...datosDelGato }
                    { ...this.state.video }
                />
            </div>
        )
    }
}
