import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const SearchBar: React.FC = (): JSX.Element => {
  return (
    <div className='col-span-3 py-2 md:col-start-2 md:col-span-2 md:row-start-1'>
      <div className='flex items-center justify-center'>
        <input type='search' placeholder='search in mate shop' className='text-lg border rounded-full w-auto focus:outline-none focus:border-emerald-300 md:w-[100%]' />
        <button ><SearchIcon className='h-8 w-8' /></button>
      </div>
    </div>
  )
}

export default SearchBar