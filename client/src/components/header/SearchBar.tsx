import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const SearchBar: React.FC = (): JSX.Element => {
  return (
    <div className='header_search_bar'>
      <input type='search' placeholder='search in mate shop' />
      <button ><SearchIcon className='header_search_bar_icon' /></button>
    </div>
  )
}

export default SearchBar