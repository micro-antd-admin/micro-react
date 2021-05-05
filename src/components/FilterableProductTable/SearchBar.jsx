
import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <div className="search-bar">
        
        <input
          type="text"
          placeholder="search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}/><br/>
        <input
          type="checkbox"
          checked={this.props.inStockOnly}
          onChange={this.handleInStockChange}/>
          Only show products in stock
      </div>
    )
  }
}

export default SearchBar