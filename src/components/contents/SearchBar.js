import React from 'react'

function SearchBar() {
    return (
        <div className="search-section">
            <form>
                <div className="search-form">
                    <div className="col-9">
                        <input type="text" className="search-bar"/>
                    </div>
                    <div className="col-3">
                        <button className="search-button">Cari</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar