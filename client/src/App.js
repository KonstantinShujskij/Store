import React from 'react'
import {useRoutes} from './routes/routes'

import * as authSelectors from './redux/selectors/auth.selectors'
import { useSelector } from 'react-redux'

import Alert from './components/Alert/Alert'
import Nav from './sections/Nav/Nav.section'


function App() {
    const isAuth = useSelector(authSelectors.isAuth)
    const isAdmin = useSelector(authSelectors.isAdmin)

    const routes = useRoutes(isAuth, isAdmin)

    return (
        <div className="App">
            <main>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor vulputate mauris, non venenatis nulla maximus in. Suspendisse et augue lorem. Suspendisse tortor sem, aliquam non dolor at, egestas euismod nulla. Integer lorem lectus, tincidunt quis faucibus ut, condimentum nec augue. Etiam a sodales risus. Quisque eleifend sodales ligula. Nunc feugiat et risus et tempus. Praesent imperdiet viverra lobortis. Etiam quis risus et erat condimentum interdum. Nunc nisi arcu, rhoncus quis pretium sit amet, ultricies efficitur sem.
                    Ut lorem turpis, porttitor vel finibus fringilla, eleifend tempus urna. Maecenas rhoncus fermentum erat nec dictum. Quisque pellentesque porttitor lectus vitae tincidunt. Nullam in semper nisl. Vivamus accumsan ipsum ac iaculis viverra. Donec et ante scelerisque, fringilla lacus ut, imperdiet justo. Sed dui diam, scelerisque vel sem sed, efficitur pellentesque diam. Sed at eros ac mauris aliquam semper quis non nulla. Aliquam lorem lacus, lobortis a cursus quis, consectetur id elit. Ut placerat pulvinar hendrerit. Donec iaculis orci at hendrerit suscipit. In sagittis finibus est, at bibendum neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id suscipit ex. Nunc finibus nibh in pharetra elementum. Cras commodo et elit efficitur auctor.
                    Suspendisse neque massa, porta ac finibus vehicula, efficitur feugiat sapien. Nulla felis lorem, sollicitudin ac erat in, blandit venenatis dolor. Proin pretium auctor malesuada. Vestibulum egestas, magna a ultrices tincidunt, leo ligula vulputate velit, ac venenatis mauris nulla nec neque. Nam vehicula nisi sem, id elementum mauris fermentum sed. Aenean rhoncus nibh ut faucibus ultricies. Curabitur elit dolor, pharetra at dui ac, cursus egestas est. Maecenas pulvinar libero nec sapien dictum, ut ornare nulla placerat. Nulla sit amet quam enim. Aliquam non libero a metus congue tristique eu ut nunc. Morbi sem est, efficitur et sem vel, molestie ultricies arcu.
                    Phasellus non purus nec purus viverra posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vitae finibus velit. Sed sit amet condimentum arcu. Vestibulum imperdiet blandit massa quis imperdiet. Nunc pellentesque tempor lacus, nec scelerisque risus aliquam bibendum. Sed rhoncus magna id elit gravida sagittis. Donec aliquet neque hendrerit turpis ullamcorper, sed posuere enim fringilla. Nullam semper urna at sem vestibulum ultrices.
                    Maecenas vestibulum dolor turpis, at pellentesque tellus pretium nec. Mauris vitae orci a nisl eleifend tempus maximus ut urna. Curabitur viverra consectetur nisi. Sed sodales vitae ex rhoncus posuere. Duis egestas dapibus massa. Quisque id cursus nisl. Sed vestibulum quis mauris eget auctor. Mauris ut fringilla massa.
                    Phasellus non purus nec purus viverra posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vitae finibus velit. Sed sit amet condimentum arcu. Vestibulum imperdiet blandit massa quis imperdiet. Nunc pellentesque tempor lacus, nec scelerisque risus aliquam bibendum. Sed rhoncus magna id elit gravida sagittis. Donec aliquet neque hendrerit turpis ullamcorper, sed posuere enim fringilla. Nullam semper urna at sem vestibulum ultrices.
                    Phasellus non purus nec purus viverra posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vitae finibus velit. Sed sit amet condimentum arcu. Vestibulum imperdiet blandit massa quis imperdiet. Nunc pellentesque tempor lacus, nec scelerisque risus aliquam bibendum. Sed rhoncus magna id elit gravida sagittis. Donec aliquet neque hendrerit turpis ullamcorper, sed posuere enim fringilla. Nullam semper urna at sem vestibulum ultrices.
                    Phasellus non purus nec purus viverra posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vitae finibus velit. Sed sit amet condimentum arcu. Vestibulum imperdiet blandit massa quis imperdiet. Nunc pellentesque tempor lacus, nec scelerisque risus aliquam bibendum. Sed rhoncus magna id elit gravida sagittis. Donec aliquet neque hendrerit turpis ullamcorper, sed posuere enim fringilla. Nullam semper urna at sem vestibulum ultrices.
                    Phasellus non purus nec purus viverra posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vitae finibus velit. Sed sit amet condimentum arcu. Vestibulum imperdiet blandit massa quis imperdiet. Nunc pellentesque tempor lacus, nec scelerisque risus aliquam bibendum. Sed rhoncus magna id elit gravida sagittis. Donec aliquet neque hendrerit turpis ullamcorper, sed posuere enim fringilla. Nullam semper urna at sem vestibulum ultrices.
                    Phasellus non purus nec purus viverra posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vitae finibus velit. Sed sit amet condimentum arcu. Vestibulum imperdiet blandit massa quis imperdiet. Nunc pellentesque tempor lacus, nec scelerisque risus aliquam bibendum. Sed rhoncus magna id elit gravida sagittis. Donec aliquet neque hendrerit turpis ullamcorper, sed posuere enim fringilla. Nullam semper urna at sem vestibulum ultrices.
                </p>
                {/* {routes} */}
            </main>
            <nav>
                <Nav />
            </nav>
            
            {/* <Alert /> */}
        </div>
    )
}

export default App
