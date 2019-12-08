import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import DisplayTable from "./components/displayTable";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Insert from "./components/Insert";
import Update from "./components/Update";
import flowerlogo from "./flowerlogo.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      data3: [],
      filterText: "",
      currName: ""
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
        data2: res.data,
        currName: res.data[0].NAME
      });
      console.log(res.data);
    });

    axios.get("/sightings6").then(res => {
      console.log("in axioss get call");
      this.setState({
        data3: res.data
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
        data2: res.data,
        currName: res.data[0].NAME
      });
    });
    axios.post("/sightings7", { flower: name }).then(res => {
      console.log(res.data);
      this.setState({
        data3: res.data
      });
    });
  }

  insertSighting(name, person, location, sighted) {
    console.log("inserting sighting function hit");
    console.log(name);
    console.log(person);
    console.log(location);
    console.log(sighted);
    axios
      .post("/sightings4", {
        name: name,
        person: person,
        location: location,
        sighted: sighted
      })
      .then(res => {
        console.log(res.data);
      });
  }

  updateFlower(comname, genus, species) {
    console.log("update flower function hit");
    console.log(comname);
    console.log(genus);
    console.log(species);
    axios
      .post("/sightings5", {
        comname: comname,
        genus: genus,
        species: species
      })
      .then(res => {
        console.log(res.data);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Flowers 101 &nbsp;
        <img
            src={flowerlogo}
            width={50}
          />
        </h1>
        
        <Search
          filterVal={this.props.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <Insert
          currName={this.state.currName}
          insertSighting={this.insertSighting.bind(this)}
        />
        <Update
          currName={this.state.currName}
          updateFlower={this.updateFlower.bind(this)}
        />
        <DisplayTable
          data={this.state.data}
          data2={this.state.data2}
          filter={this.state.filterText}
          filterText={this.state.filterText}
          displaySightings={this.displaySightings.bind(this)}
          data3={this.state.data3}
        />
      </div>
    );
  }
}

export default App;
