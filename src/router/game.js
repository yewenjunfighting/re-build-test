import {HashRouter as Router, Route, Switch} from "react-router-dom";
import React, {Suspense} from "react";
import Map from '../components/Map'
import Home from '../components/Home'
import Cloud from '../components/Cloud'
import LevelChoose from '../components/LevelChoose'
const AppRouter = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/map"  component={Map} />
                <Route exact path="/cloud" component={Cloud} />
                <Route exact path="/levelChoose" component={LevelChoose} />
                <Route component={() => (<div>404</div>)} />
            </Switch>
        </Suspense>
    </Router>
)

export default AppRouter;
