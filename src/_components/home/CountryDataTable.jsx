import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export default class CountryDataTable extends Component {
    render() {
        const { data } = this.props;
        return (
          <Table celled>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Cases</Table.HeaderCell>
                      <Table.HeaderCell>Status</Table.HeaderCell>
                      <Table.HeaderCell>Date</Table.HeaderCell>
                      <Table.HeaderCell>Country</Table.HeaderCell>
                      <Table.HeaderCell>Country Code</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                    {data.length > 0 && data.map((d, k) => 
                      <Table.Row key={k}>
                          <Table.Cell>{d["Cases"]}</Table.Cell>
                          <Table.Cell>{d["Status"]}</Table.Cell>
                          <Table.Cell>{d["Date"]}</Table.Cell>
                          <Table.Cell>{d["Country"]}</Table.Cell>
                          <Table.Cell>{d["CountryCode"]}</Table.Cell>
                      </Table.Row>
                    )}
                    {data.length === 0 && ( <Table.Row>
                        <Table.Cell>No Data Found</Table.Cell>
                    </Table.Row>)}
              </Table.Body>
          </Table>
        );
    }
}
