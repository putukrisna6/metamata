import React from 'react'
import RecipeDescription from './RecipeDescription'

function RecipeCard() {
    return(
        <div className="recipe-card">
            <div className="recipe-item">
                <div className="recipe-pic"></div>
                <RecipeDescription />
            </div>
        </div>
    )
}

export default RecipeCard