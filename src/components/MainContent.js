import React from 'react'
import RecipeList from './contents/recipe/RecipeList'
import SearchBar from './contents/SearchBar'
import SearchResult from './contents/SearchResult'
import TitleBanner from './contents/TitleBanner'

function MainContent() {
    return (
        <main className="container">
            <TitleBanner />
            <SearchBar />
            <SearchResult />
            <RecipeList />
        </main>
    )
}

export default MainContent