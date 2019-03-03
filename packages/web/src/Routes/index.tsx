import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Sidebar } from '../Components/Sidebar'
import { Home } from '../Pages/Home'
import { DiscoverPage } from '../Pages/Discover'
import { MessagesPage } from '../Pages/Messages'
import { Row } from './style'

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
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
