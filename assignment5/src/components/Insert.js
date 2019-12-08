import React from "react";

class Insert extends React.Component {
  //filterUpdate() {
  //Here you will need to update the value of the filter with the value from the textbox

  //	}

  render() {
    
    return (
    
      <form>
      <h4>Insert New Sighting</h4>
        <input style={{width: 185, height: 35}} type="text" placeholder="name"
        
         />
         <input style={{width: 185, height: 35}} type="text"  placeholder="person"
         
         />
         <input style={{width: 185, height: 35}} type="text"  placeholder="location"
         
         />
         <input style={{width: 185, height: 35}} type="text"  placeholder="sighted"
        
         />
        
      <button class="btn btn-dark">Insert</button>
      </form>
    );
  }
}
export default Insert;
