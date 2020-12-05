import React, { Component } from 'react';

import { connect } from 'react-redux';
import { wpActions } from '../../_actions';
import { Dropdown } from 'semantic-ui-react';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch(wpActions.getAll());
    }

    render() {
        const { countries, loading } = this.props;
        return (
            <div>
               {countries &&
                    countries.map(item => <div>{item["Country"]}</div>)
                }

                <Dropdown
                    placeholder='Select Country'
                    fluid
                    search
                    selection
                    options={countries}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { countries } = state;
    const { loading } = state.app.driven;

    return {
        countries,
        loading
    };
}

const connectedHomepage = connect(mapStateToProps)(Homepage);
export { connectedHomepage as Homepage };
