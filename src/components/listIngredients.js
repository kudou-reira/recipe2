import React from 'react';

const IngredientProperties = (props) => {
  const ingredients = props.showList.split(',').map((ingredient, index) => {
    return (
      <div key={ingredient}>
        <li className="list-group-item">
          {ingredient}
        </li>
      </div>
    );
  });

  return <ul>{ingredients}</ul>;

}

export default IngredientProperties;
