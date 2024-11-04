// src/components/BurgerStack.jsx

const BurgerStack = ({ burgerStack, removeIngredient }) => {
    return (
      <div>
        <h2>Your Burger</h2>
        <ul>
          {burgerStack.map((ingredient, index) => (
            <li key={index} style={{backgroundColor: ingredient.color}}>
              {ingredient.name}
              <button onClick={() => removeIngredient(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default BurgerStack
  