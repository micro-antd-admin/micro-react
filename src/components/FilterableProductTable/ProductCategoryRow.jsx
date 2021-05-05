import React, { Component } from 'react';

class ProductCateGoryRow extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <p className="product-category-row">{this.props.category}</p> );
  }
}
 
export default ProductCateGoryRow;