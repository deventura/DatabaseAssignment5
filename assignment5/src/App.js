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
      data: []
    };
  }

  componentDidMount() {
    axios.get("/sightings").then(res => {
      console.log("in axios get call");
      this.setState({
        data: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Database Assignment 5</h1>
        <div>{this.state.data}</div>
        <Search />
      </div>
    );
  }
}

export default App;
