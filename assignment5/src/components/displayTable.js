import React from "react";
import { Component } from "react";
import Table from "react-bootstrap/Table";

class displayTable extends React.Component {
  render() {
    const { data } = this.props;

    const flowernames = data.map(names => {
      return (
        <tr>
          <td>{names}</td>
        </tr>
      );
    });

    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Flower Name</th>
            </tr>
          </thead>
          <tbody>{flowernames}</tbody>
        </Table>
      </div>
    );
  }
}
export default displayTable;
