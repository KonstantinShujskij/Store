import React from 'react'
import { useSelector } from 'react-redux'

import {useRoutes} from './routes/routes'
import useData from './hooks/data.hook'
import * as authSelectors from './redux/selectors/auth.selectors'

import Alert from './components/Alert/Alert'
import Nav from './sections/Nav/Nav.section'


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
