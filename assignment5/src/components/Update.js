import React from "react";

class Update extends React.Component {
  render() {
    const { currName, updateFlower } = this.props;
    return (
      <form>
        <h3>Update Flower Information For:</h3>
        <h3>{currName}</h3>
        <input
          style={{ width: 170, height: 35 }}
          type="text"
          ref="genusInput"
          placeholder="genus"
        />
        <input
          style={{ width: 170, height: 35 }}
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
