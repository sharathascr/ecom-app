import "../styles/ProductDetails.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProductById } from "../slices/productSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  const { productId } = useParams();
  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  return (
    <div className="product-details">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && product ? (
        <div className="product-details-content">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-rating">
              <span className="rating-value">{product.rating}</span>
              <span className="rating-stars">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </span>
            </div>
            <div className="product-stock">
              {product.stock > 0 ? (
                <span className="in-stock">In Stock</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>
            <div className="product-price-info">
              <p className="product-price">${product.price.toFixed(2)}</p>

              <p className="product-discounted-price">
                $
                {(
                  product.price *
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
              </p>
              <p className="product-discount-percentage">
                {product.discountPercentage}%
              </p>
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      ) : !loading && !error ? (
        <p>Product not found</p>
      ) : null}
    </div>
  );
}

export default ProductDetails;
