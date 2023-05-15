import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Counter } from './apps/counter/CounterApp'
import { EventsApp } from './apps/events/EventsApp'
import { CustomEventsApp } from './apps/customEvents/CustomEventsApp'
import { MarcadoHtmlApp } from './apps/marcadoHTML/MarcadoHtmlApp'
import { PortalsApp } from './apps/portals/PortalsApp'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PortalsApp />
    </React.StrictMode>
)
