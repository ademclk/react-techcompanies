import React from "react";

export const SearchBar = ({searchField, searchChange}) => {

    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--black bg-lightest-blue'
                type='text'
                placeholder='Enter company name'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBar;