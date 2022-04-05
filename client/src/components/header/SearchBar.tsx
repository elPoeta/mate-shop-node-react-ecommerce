import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const SearchBar: React.FC = (): JSX.Element => {
  return (
    <div className=' flex items-center justify-center col-span-3 py-2'>
      <input type='search' placeholder='search in mate shop' className='text-lg border rounded-full w-auto focus:outline-none focus:border-emerald-300' />
      <button ><SearchIcon className='h-8 w-8' /></button>
    </div>
  )
}

export default SearchBar