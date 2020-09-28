import React from 'react';


class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  submitOrder = () => {
    alert(
      `Thank you for your order, you will get your product very soon.`,
    );
  };

  render() {
    return (
      <div className="app-product-page">
        <div id="header">
          <img src="https://awik.io/demo/webshop-zoom/star_logo.png" />
          Product Page
        </div>

        <div className="columns">
          <div className="column">
            <div className="thumbnail-container">
              <img
                className="drift-demo-trigger"
                data-zoom="https://awik.io/demo/webshop-zoom/shoe-large.jpg"
                src="https://awik.io/demo/webshop-zoom/shoe-small.jpg"
              />
            </div>
          </div>

          <div className="column">
            <div className="details">
              <h1>Air Jordan 1 Retro</h1>
              <p className="price">$95.99</p>
              <p className="description">
                A remarkable shoe that's naturally soft, cozy all over, and fits
                your every move.
              </p>

              <div className="columns">
                <div className="column" id="wishlist-container">
                  <button className="button">
                    <span className="icon is-small">
                      <i className="fas fa-heart"></i>
                    </span>
                    <span>ADD TO WISHLIST</span>
                  </button>
                </div>

                <div className="column" id="buy-container">
                  <button className="button buy-button">
                    <span className="icon is-small">
                      <i className="fas fa-shopping-bag"></i>
                    </span>
                    <span onClick={this.submitOrder}>ADD TO BAG</span>
                  </button>
                </div>
              </div>

              <p className="small-text">
                <span>Standard delivery</span> 2-5 working days
              </p>
              <p className="small-text">
                <span>Next day delivery</span> order before 2pm ($5.79)
              </p>
            </div>
          </div>
        </div>

        <p className="small-text style-1">
          About Us
          <a href="" target="_blank">
            Contact Us
          </a>
        </p>
      </div>
    );
  }
}
export default ProductDetails;
