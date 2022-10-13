import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FinalResultNew from "../main/FinalResultNew";
import Layout from "../main/layout/Layout";

function Routes() {
    return (
        <Router forceRefresh={true}>
            <Switch>
                <Route exact path="/" component={Layout} />
                <Route exact path="/result" component={FinalResultNew} />
            </Switch>
        </Router>
    );
}

export default Routes;
