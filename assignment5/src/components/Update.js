import React from "react";

class Update extends React.Component {
  //filterUpdate() {
  //Here you will need to update the value of the filter with the value from the textbox

  //	}

  render() {
    
    return (
    
      <form>
      <h4>Update Flower Information</h4>
        <input style={{width: 170, height: 35}} type="text" placeholder="genus"
        
         />
         <input style={{width: 170, height: 35}} type="text"  placeholder="species"
         
         />
        
        
      <button class="btn btn-dark">Update</button>
      </form>
    );
  }
}
export default Update;
