import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import XLK30 from "./map/XLK30";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={XLK30} />
            </Switch>
        );
    }
}

export default App;
