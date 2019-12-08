import React from "react";
import { Component } from "react";
import Table from "react-bootstrap/Table";

class displayTable extends React.Component {
  render() {
    const { data, filterText, data2, displaySightings, data3 } = this.props;

    const flowernames = data

      .filter(names => names.toLowerCase().includes(filterText.toLowerCase()))
      .map(names => {
        return (
          <tr onClick={() => displaySightings(names)}>
            <td>{names}</td>
          </tr>
        );
      });

    const sightings = data2.map(sightings => {
      return (
        <tr>
          <td>{sightings.PERSON}</td>
          <td>{sightings.LOCATION}</td>
          <td>{sightings.SIGHTED}</td>
        </tr>
      );
    });

    const flowerInfo = data3.map(info => {
      return (
        <tr>
          <td>{info.GENUS}</td>
          <td>{info.SPECIES}</td>
        </tr>
      );
    });

    return (
      <div class="row">
        <div class="col">
          <div className="table">
            <Table bordered hover size="sm">
              <thead class="thead-dark">
                <tr>
                  <th>Flower Name</th>
                </tr>
              </thead>
              <tbody>{flowernames}</tbody>
            </Table>
          </div>
        </div>
        <div class="col">
          <div className="table3">
            <Table bordered hover size="sm">
              <thead class="thead-dark">
                <tr>
                  <th>Genus</th>
                  <th>Species</th>
                </tr>
              </thead>
              <tbody>{flowerInfo}</tbody>
            </Table>
          </div>
          <div className="table2">
            <Table bordered hover size="sm">
              <thead class="thead-dark">
                <tr>
                  <th>Person</th>
                  <th>Location</th>
                  <th>Sighted</th>
                </tr>
              </thead>
              <tbody>{sightings}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
export default displayTable;
