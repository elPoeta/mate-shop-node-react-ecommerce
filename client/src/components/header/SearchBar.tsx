import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const SearchBar: React.FC = (): JSX.Element => {
  return (
    <div className='col-span-2'>
      <input type='search' placeholder='search in mate shop' />
      <button ><SearchIcon className='h-5 w-5' /></button>
    </div>
  )
}

export default SearchBar