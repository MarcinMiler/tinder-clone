import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { App } from '../Pages/App'
import { Home } from '../Pages/Home'

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/app" component={App} />
        </Switch>
    </BrowserRouter>
)
