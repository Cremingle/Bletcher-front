import React, { Component } from 'react';

import NavBar from 'Components/Main/NavBar';

const defaultProps = {};
const propTypes = {};

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar isActive="cart" />
        This is CartPage
      </>
    );
  }
}

CartPage.defaultProps = defaultProps;
CartPage.propTypes = propTypes;

export default CartPage;
