import React from "react";

class Search extends React.Component {
  //filterUpdate() {
  //Here you will need to update the value of the filter with the value from the textbox

  //	}
  render() {
    const {filterVal, filterUpdate} = this.props
    return (
      <form>
        <input style={{width: 250, height: 40}} type="text" ref= "filterInput" value= {filterVal} placeholder="Search Flowers.."
         onChange={() => {
           filterUpdate(this.refs.filterInput.value) 
          }}
         />
        
      
      </form>
    );
  }
}
export default Search;
