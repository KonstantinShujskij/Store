import React from 'react'
import {useRoutes} from './routes/routes'


function App() {
    const routes = useRoutes()

    return (
        <div className="App">
            {routes}
        </div>
    )
}

export default App
