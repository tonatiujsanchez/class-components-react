import { TarjetaFruta } from './components/TarjetaFruta'


const Frutas = {
	Mango: ({ ingrediente }) => <div>Fresa con {ingrediente}</div>,
  	Melon: (props) => <div>Melon con { props.ingrediente }</div>,
}



export const App = () => (
    <div>
        <TarjetaFruta name="Sandia" price={5.2} />
        <TarjetaFruta name="Naranja" price={4.1} />
        <TarjetaFruta name="Kiwi" price={3} />
        <Frutas.Melon ingrediente="yogur" />
        <Frutas.Mango ingrediente="chile" />
    </div>
)
