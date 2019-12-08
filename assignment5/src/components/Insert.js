import React from "react";

class Insert extends React.Component {
  //filterUpdate() {
  //Here you will need to update the value of the filter with the value from the textbox

  //	}

  render() {
    
    return (
    
      <form>
      <h2>Insert</h2>
        <input style={{width: 250, height: 50}} type="text" placeholder="name"
        
         />
         <input style={{width: 250, height: 50}} type="text"  placeholder="person"
         
         />
         <input style={{width: 250, height: 50}} type="text"  placeholder="location"
         
         />
         <input style={{width: 250, height: 50}} type="text"  placeholder="sighted"
        
         />
        
      <button >Submit</button>
      </form>
    );
  }
}
export default Insert;
