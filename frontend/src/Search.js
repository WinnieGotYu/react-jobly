import React, { Component } from 'react';

class Search extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <form>
          <input placeholder="Enter search term..." />
          <button type="submit"> Submit </button>
        </form>
      </div> 
    );
  }
}
 
export default Search;