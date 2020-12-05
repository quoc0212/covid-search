import { Route, Router, Switch } from 'react-router-dom';
import { errorActions, pageActions } from '../_actions';

import Loadable from 'react-loadable';
import { PageLoader } from '../_components/loaders';
import React from 'react';
import { connect } from 'react-redux';
import { history } from '../_helpers';

const LoadableHomepage = Loadable({
    loader: () => import('../pages/Home').then(module => module.Homepage),
    loading: PageLoader
});

class Routers extends React.Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            this.props.dispatch(pageActions.change(location.pathname.replace('/', '')));
            // clear error on location change
            this.props.dispatch(errorActions.clean());
        });
    }

    render() {
        const { _error } = this.props;
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={LoadableHomepage} />
                </Switch>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    const { _error } = state.app;

    return {
        _error
    };
}

const connectedRouters = connect(mapStateToProps)(Routers);
export { connectedRouters as Routers };
