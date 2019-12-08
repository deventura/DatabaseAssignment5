import React from "react";

class Insert extends React.Component {
  render() {
    const { currName, insertSighting } = this.props;
    return (
      <form>
        <h2>Insert Sighting For: </h2>
        <h3>{currName}</h3>
        <input
          style={{ width: 250, height: 50 }}
          type="text"
          ref="personInput"
          placeholder="person"
        />
        <input
          style={{ width: 250, height: 50 }}
          type="text"
          ref="locationInput"
          placeholder="location"
        />
        <input
          style={{ width: 250, height: 50 }}
          type="text"
          ref="sightedInput"
          placeholder="sighted"
        />
        <button class="btn btn-dark"
          onClick={e => {
            insertSighting(
              currName,
              this.refs.personInput.value,
              this.refs.locationInput.value,
              this.refs.sightedInput.value
            );
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}
export default Insert;
