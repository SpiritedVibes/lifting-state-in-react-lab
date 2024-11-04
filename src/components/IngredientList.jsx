// src/components/IngredientList.jsx

const IngredientList = ({ ingredients, addIngredient }) => {
    return (
      <div>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index} style={{backgroundColor: ingredient.color}}>
              {ingredient.name}
              <button onClick={() => addIngredient(ingredient)}>+</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default IngredientList
  