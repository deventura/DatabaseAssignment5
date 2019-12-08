import React from "react";

class Update extends React.Component {
  render() {
    const { currName, updateFlower } = this.props;
    return (
      <form>
        <h2>Update Flower Information For:</h2>
        <h3>{currName}</h3>
        <input
          style={{ width: 250, height: 50 }}
          type="text"
          ref="genusInput"
          placeholder="genus"
        />
        <input
          style={{ width: 250, height: 50 }}
          type="text"
          ref="speciesInput"
          placeholder="species"
        />

        <button
          class="btn btn-dark"
          onClick={e => {
            updateFlower(
              currName,
              this.refs.genusInput.value,
              this.refs.speciesInput.value
            );
            e.preventDefault();
          }}
        >
          Update
        </button>
      </form>
    );
  }
}
export default Update;
