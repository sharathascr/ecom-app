import "../styles/SearchBox.css";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../slices/searchSlice";

function SearchBox() {
  const searchValue = useSelector((state) => state.search.query);
  const dispatch = useDispatch();

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search products..."
        value={searchValue}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </div>
  );
}

export default SearchBox;
