import React from "react";
import "./App.css";
import Search from "./components/Search";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("/").then(res => {
      console.log("in axios get call");
      this.setState({
        data: res.data.success
      });
      console.log(res.data.success);
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
