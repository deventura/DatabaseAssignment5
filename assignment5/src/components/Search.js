import React from "react";

class Search extends React.Component {
  //filterUpdate() {
  //Here you will need to update the value of the filter with the value from the textbox

  //	}
  render() {
    const {filterVal, filterUpdate} = this.props
    return (
      <form>
        <input type="text" ref= "filterInput" value= {filterVal} placeholder="Type to Filter"
         onChange={() => {
           filterUpdate(this.refs.filterInput.value) 
          }}
         />
        
      
      </form>
    );
  }
}
export default Search;
