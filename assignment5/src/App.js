import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import DisplayTable from "./components/displayTable";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      filterText: ""
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  componentDidMount() {
    axios.get("/sightings").then(res => {
      console.log("in axios get call");
      this.setState({
        data: res.data
      });
      console.log(res.data);
    });

    axios.get("/sightings2").then(res => {
      console.log("in axi get call");
      this.setState({
        data2: res.data
      });
      console.log(res.data);
    });
  }

  displaySightings(name) {
    console.log("displaying sightings function hit");
    console.log(name);
    axios.post("/sightings3", { flower: name }).then(res => {
      console.log(res.data);
      this.setState({
        data2: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Flowers 101</h1>

        <Search
          filterVal={this.props.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <DisplayTable
          data={this.state.data}
          data2={this.state.data2}
          filter={this.state.filterText}
          filterText={this.state.filterText}
          displaySightings={this.displaySightings.bind(this)}
        />
      </div>
    );
  }
}

export default App;
