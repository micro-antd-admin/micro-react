import React, { Component } from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { distinct } from '../../utils/arrayUtil';

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const products = this.props.products.filter(p => (!inStockOnly || p.stocked) && (!filterText || p.name.indexOf(filterText) >= 0))
    let categories = products.map(product => {
      return product.category
    })
    categories = distinct(categories)

    return (
    <div>
      <div className="product-table-header">
        <span>Name</span>
        <span>Price</span>
      </div>
      
      {categories.map((c) => {
        const cp = products.filter(p => p.category === c)
        const pr = cp.map((p, index) => <ProductRow product={p} key={c+index}/>)
        return (
          <div key={c} >
            <ProductCategoryRow category={c}/>
            <div className="product-row">
              <ul>
                {pr}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
    );
  }
}
 
export default ProductTable;
