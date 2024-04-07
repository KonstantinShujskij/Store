import React from 'react'
import {useRoutes} from './routes/routes'

import Alert from './components/Alert/Alert'


function App() {
    const routes = useRoutes(false, false)

    return (
        <div className="App">
            {routes}

            <Alert />
        </div>
    )
}

export default App
