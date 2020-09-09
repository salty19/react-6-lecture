import React, { Component } from 'react'
import Product from './Product'
import Loading from './Loading'
import {getAllProducts} from '../../ducks/productReducer'
import { connect } from 'react-redux'
import './productList.css'
import { connect } from 'react-redux'

class ProductList extends Component {

  componentDidMount() {
    this.props.getAllProducts()
  }


  render() {
    return (
      <div className="products-list">
        {this.props.isLoading && <Loading/>}
        {this.props.products.products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return reduxState.products
}


export default connect(mapStateToProps, {getAllProducts})(ProductList)
