import React from "react";

function CategoryFilter({categories, onFilterChange, selectedCategory}) {
  const handleFilterChange = (e) => onFilterChange(e.target.value)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} className={category === selectedCategory ? 'selected' : ''} onClick={handleFilterChange}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
