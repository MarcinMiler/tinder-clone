import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Sidebar } from '../Components/Sidebar'
import { LoginPage } from '../Pages/Login'
import { DiscoverPage } from '../Pages/Discover'
import { MessagesPage } from '../Pages/Messages'
import { RegisterPage } from '../Pages/Register'
import { Row } from './style'

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />

            <Route path="/app">
                <Row>
                    <Sidebar />

                    <Route path="/app/discover" component={DiscoverPage} />
                    <Route
                        path="/app/messages/:id/:userId"
                        component={MessagesPage}
                    />
                </Row>
            </Route>
        </Switch>
    </BrowserRouter>
)
