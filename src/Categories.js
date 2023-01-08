import React from 'react';

const Categories = ({ filterItems, categories }) => {
  return (
    <div className='btn-container'>
      {/* <button className='filter-btn' onMouseDown={() => filterItems('all')}>
        all
      </button>
      <button
        className='filter-btn'
        onMouseDown={() => filterItems('breakfast')}
      >
        breakfast
      </button> */}
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onMouseDown={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
