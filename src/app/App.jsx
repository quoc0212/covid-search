import React from 'react';
import { Routers } from './Routers';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Routers />
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
