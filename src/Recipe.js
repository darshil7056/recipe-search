import React from 'react'
import "./recipe.css"
const Recipe = ({ingredients,title,calories,image}) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text} </li>
                ))}
            </ol>
            <p>calories:{calories.toFixed(2)}</p>

            <img src = {image} alt = "" />
        </div>

    );
};
export default Recipe;