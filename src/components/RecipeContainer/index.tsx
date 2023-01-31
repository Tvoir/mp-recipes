import React from 'react';
import "./styles.css";
import RecipeCard from "../RecipeCard";


function RecipeContainer( meals: any) {
  // const [meals] = React.useState([]);
  return (
    <div className='recipe-container row-cols-3 p-2 m-1' >
      {meals.map((meal: any) => (
        <RecipeCard {...meal} />
      // <RecipeCard key={meal.idMeal} {...meals} />
      ))}
    </div>
  )
}

export default RecipeContainer;