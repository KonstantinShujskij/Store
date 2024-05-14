import React from 'react'
import {useRoutes} from './routes/routes'

import * as authSelectors from './redux/selectors/auth.selectors'
import { useSelector } from 'react-redux'

import Alert from './components/Alert/Alert'
import Nav from './sections/Nav/Nav.section'
import useData from './hooks/data.hook'


function App() {
    const isAuth = useSelector(authSelectors.isAuth)
    const isAdmin = useSelector(authSelectors.isAdmin)

    useData()

    const routes = useRoutes(isAuth, isAdmin)

    return (
        <div className="App">
            <main>
                {routes}
            </main>
            <nav>
                <Nav />
            </nav>
            
            <Alert />
        </div>
    )
}

export default App
