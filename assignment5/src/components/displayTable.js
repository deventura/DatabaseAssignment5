
import React from "react";
import { Component } from "react";
import Table from 'react-bootstrap/Table';



class displayTable extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  
  //filterUpdate() {
  //Here you will need to update the value of the filter with the value from the textbox

  //  }
  render() {
    return (
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    );
  }
}
export default displayTable;


