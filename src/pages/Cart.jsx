const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 199.99,
    brand: "SoundWave",
    currency: "USD",
    rating: 4.5,
    reviews: 1200,
    stock: 25,
    description:
      "Experience immersive sound with our wireless noise-cancelling headphones. Perfect for music lovers and travelers.",
    discountPercentage: 20,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    tags: ["wireless", "headphones", "noise-cancelling", "audio"],
  },
  {
    id: 2,
    name: "Bluetooth True Wireless Earbuds",
    category: "Electronics",
    price: 79.99,
    brand: "TinyBeats",
    currency: "USD",
    rating: 4.2,
    reviews: 540,
    stock: 80,
    description: "Compact earbuds with strong bass and long battery life.",
    discountPercentage: 10,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    tags: ["wireless", "earbuds", "audio", "portable"],
  },
  {
    id: 3,
    name: "Over-Ear Studio Headphones",
    category: "Electronics",
    price: 149.99,
    brand: "StudioPro",
    currency: "USD",
    rating: 4.6,
    reviews: 320,
    stock: 40,
    description: "High-fidelity headphones for mixing and listening at home.",
    discountPercentage: 15,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    tags: ["headphones", "audio", "studio"],
  },
];

import "../styles/Cart.css";

function Cart() {
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-content">
        <div className="cart-left">
          <div className="cart-items">
            {products.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.name} />
                <div className="cart-item-details">
                  <h2 className="cart-item-name">{product.name}</h2>
                  <div className="cart-price-details">
                    <p className="cart-item-price">
                      ${product.price.toFixed(2)}
                    </p>
                    <p className="cart-item-discount-price">
                      $
                      {(
                        product.price *
                        (1 - product.discountPercentage / 100)
                      ).toFixed(2)}
                    </p>
                    <p className="cart-item-discount">
                      {product.discountPercentage}%
                    </p>
                  </div>
                  <p className="cart-item-quantity">
                    Quantity:{" "}
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>{" "}
                  </p>
                  <button className="remove-button">Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-right">
          <h2>Summary</h2>
          <p>
            <span className="total">Total Price:</span>
            <span className="total">
              $
              {products
                .reduce((acc, product) => acc + product.price, 0)
                .toFixed(2)}
            </span>
          </p>
          <p>
            <span className="total">Total Discounted Price:</span>
            <span className="total">
              $
              {products
                .reduce(
                  (acc, product) =>
                    acc +
                    product.price * (1 - product.discountPercentage / 100),
                  0,
                )
                .toFixed(2)}
            </span>
          </p>
          <p>
            <span className="total">Total Items:</span>
            <span className="total">{products.length}</span>
          </p>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
