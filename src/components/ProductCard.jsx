import { useNavigate } from "react-router-dom";
import "../styles/ProductCard.css";
import { calculateDiscountPrice } from "../utils/calculateDiscountPrice";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const discountedPrice = calculateDiscountPrice(
    product.price,
    product.discountPercentage,
  );


  return (
    <Link
      className="product-card"
     to={`/products/${product.id}`}
    >
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p>
          <strong>${discountedPrice.toFixed(2)}</strong>{" "}
          {product.discountPercentage > 0 && (
            <span className="original-price">${product.price.toFixed(2)}</span>
          )}
        </p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </Link>
  );
}

export default ProductCard;
