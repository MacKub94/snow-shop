import React, { useContext } from "react";
import "./ShopFilters.scss";
import { ProductsContext } from "../../context/productsContext";
import { formatPrice } from "../../helpers";

const ShopFilters = () => {
  const {
    products,
    getUniqueValues,
    filters,
    updateFilters,
    clearFilters,
  } = useContext(ProductsContext);
  const categories = getUniqueValues(products, "category");
  const brands = getUniqueValues(products, "brand");
  const sex = getUniqueValues(products, "sex");
  return (
    <div className="filters-container">
      <h4>Category</h4>
      <div className="filter-field">
        {categories.map((c, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                updateFilters("category", c);
              }}
              className={`${filters.category === c ? "active" : ""}`}
            >
              {c}
            </button>
          );
        })}
      </div>
      <h4>Brand</h4>
      <div className="filter-field">
        {brands.map((b, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                updateFilters("brand", b);
              }}
              className={`${filters.brand === b ? "active" : ""}`}
            >
              {b}
            </button>
          );
        })}
      </div>
      <h4>Sex</h4>
      <div className="filter-field">
        {sex.map((s, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                updateFilters("sex", s);
              }}
              className={`${filters.sex === s ? "active" : ""}`}
            >
              {s}
            </button>
          );
        })}
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h4>Price</h4>
        <h5>{formatPrice(filters.price)}</h5>
        <input
          type="range"
          min={filters.min_price}
          max={filters.max_price}
          value={filters.price}
          onChange={(e) => {
            updateFilters("price", e.target.value);
          }}
        />
      </form>
      <button onClick={clearFilters} className="clear-filters">
        Clear Filters
      </button>
    </div>
  );
};

export default ShopFilters;
