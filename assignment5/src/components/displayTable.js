import React from "react";
import { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

class displayTable extends React.Component {
  constructor(props) {
    super(props);
    this.displaySightings.bind(this);
    var flower = "";
  }

  displaySightings(name) {
    console.log("name:", name);
    this.flower = name;
    axios.post("/sightings/name", { flower: this.flower }).then(res => {
      console.log(res.data);
    });
  }

  render() {
    const { data } = this.props;

    const flowernames = data.map(names => {
      return (
        <tr onClick={() => this.displaySightings(names)}>
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
