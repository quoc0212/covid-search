import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { covidActions } from '../../_actions';
import { Button, Dropdown, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CountryDataTable from '../../_components/home/CountryDataTable';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: null,
            fromDate: new Date(),
            toDate: new Date(),
            isSearched: false
        };
        this.handleCountryChange = this.handleCountryChange.bind(this); 
        this.handleFromDateChange = this.handleFromDateChange.bind(this);
        this.handleToDateChange = this.handleToDateChange.bind(this);

    }

    componentDidMount() {
        this.props.dispatch(covidActions.getAll());
    }

    handleCountryChange = (event ,data) => {
        this.setState({country: data.value});
    }

    handleFromDateChange = (value) => {
        this.setState({fromDate: value});
    }

    handleToDateChange = (value) => {
        this.setState({toDate: value});
    }

    handleSearchButtonClick  = () => {
        const { country, fromDate, toDate } = this.state;
        this.setState({isSearched: true});
        this.props.dispatch(covidActions.getByCountry(country, moment(fromDate).format("YYYY-MM-DD"), moment(toDate).format("YYYY-MM-DD")));
    }

    render() {
        const { countries, data } = this.props;
        const { country, fromDate, toDate, isSearched } = this.state;
        return (
            <div className="container">
                <div>
                    <Label size="large">Country</Label>
                    <Dropdown
                        placeholder='Select Country'
                        search
                        selection
                        options={countries}
                        onChange={this.handleCountryChange}
                    />
                </div>
                <div>
                    <Label>From Date</Label>
                    <DatePicker 
                        dateFormat="yyyy-MM-dd"
                        selected={fromDate && fromDate !== "" ? fromDate : new Date()}
                        type="date"
                        onChange={this.handleFromDateChange} />

                    <Label>To Date</Label>
                    <DatePicker 
                        dateFormat="yyyy-MM-dd"
                        selected={toDate && toDate !== "" ? toDate : new Date()}
                        type="date"
                        onChange={this.handleToDateChange} />
                </div>

                <Button primary disabled={!country} onClick={this.handleSearchButtonClick}>Search</Button>

                {isSearched && data &&
                    <CountryDataTable data={data}/> 
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
