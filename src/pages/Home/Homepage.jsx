import React, { Component } from 'react';

import { connect } from 'react-redux';
import { covidActions } from '../../_actions';
import { Button, Dropdown, Table } from 'semantic-ui-react';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: {},
            isSearched: false
        };
        this.handleCountryChange = this.handleCountryChange.bind(this); 
    }

    componentDidMount() {
        this.props.dispatch(covidActions.getAll());
    }

    handleCountryChange = (event ,data) => {
        this.setState({country: data.value});
    }

    handleSearchButtonClick  = () => {
        const { country } = this.state;
        this.setState({isSearched: true});
        this.props.dispatch(covidActions.getByCountry(country));
    }

    render() {
        const { countries, data, loading } = this.props;
        return (
            <div>
                <Dropdown
                    placeholder='Select Country'
                    search
                    selection
                    options={countries}
                    onChange={this.handleCountryChange}
                />

                <Button primary onClick={this.handleSearchButtonClick}>Search</Button>
                {data && data.length > 0 ? 
                    (<Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Cases</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {data.map((d, k) => 
                                <Table.Row key={k}>
                                    <Table.Cell>{d["Cases"]}</Table.Cell>
                                    <Table.Cell>{d["Status"]}</Table.Cell>
                                    <Table.Cell>{d["Date"]}</Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>) : 
                    <div>There is no data of this country</div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { countries, data } = state.covid;
    const { loading } = state.app.driven;

    return {
        countries,
        data,
        loading
    };
}

const connectedHomepage = connect(mapStateToProps)(Homepage);
export { connectedHomepage as Homepage };
