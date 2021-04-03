import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import "./App.css";

const App = () => {
  const APP_ID = "1809110d";
  const APP_KEY = "51ddfaad083e8f124e66d87b9fe6495f";
  const [recipe,setReceipe] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('chicken');

  useEffect( () => {
    console.log("effect run ")
    getRecipes();
  }, [query]);
  

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setReceipe(data.hits);
  }
 const updateSearch = e => {
  
   setSearch(e.target.value);
  
 }
 const getSearch = e => {
  e.preventDefault();
   setQuery(search);
   setSearch('');
 }
  return (
    <div className="App">
      <form className="search-form">
        <input onChange = {updateSearch} className="search-bar" type="text" placeholder="search for any receipe" value={search} />
        <button

          className="search-button"
          type="submit" onClick={getSearch}> search</button>
      </form>
      <div className="recipeee"
       >
      {recipe.map(recipe=>(

        <Recipe
         key={recipe.recipe.label}
         title={recipe.recipe.label} 
                 calories={recipe.recipe.calories}
                 image={recipe.recipe.image }
                 ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>

    </div>
  );  

};
export default App;