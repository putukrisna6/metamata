import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeList() {
    return(
        <div className="recipe-list">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    )
}

export default RecipeList