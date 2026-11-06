import SearchBox from "../components/SearchBox";
import "../styles/Home.css";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../services/productsApi";

function Home() {
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <div className="home">
      <SearchBox />
      <div className="home-shell">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data &&
          !isLoading &&
          (data.length > 0 ? (
            data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          ))}
      </div>
    </div>
  );
}

export default Home;
