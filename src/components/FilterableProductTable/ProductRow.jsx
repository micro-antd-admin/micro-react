import React, {Component} from 'react'

class ProductRow extends Component {
  render() {
    return (
      <li>
        <span>{this.props.product.name}</span> <span>{this.props.product.price}</span>
      </li>
    )
  }
}

export default ProductRow
