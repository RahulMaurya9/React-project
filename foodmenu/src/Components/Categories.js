import React from "react";

function Categories({ filterCategories, itemCateogry }) {
  return (
    <div className="btn-container">
      {/* <button className = "filter-btn" onClick={()=>filterCategories('all')}>All</button>
      <button className = "filter-btn" onClick={()=>filterCategories('breakfast')}>Breakfast</button>
      <button className = "filter-btn" onClick={()=>filterCategories('lunch')}>Lunch</button>
      <button className = "filter-btn" onClick={()=>filterCategories('shakes')}>Shakes</button> */}
      {itemCateogry.map((item, index) => {
        return (
          <button
            key ={index}
            className="filter-btn"
            onClick={() => filterCategories(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
