import React from 'react'
import { fetchBeers } from '../actions/fetch-beers'
import Beers from '../components/Beers/Beers';
import LoadMore from '../components/loadMore';

const Infinite = async () => {
    const beers = await fetchBeers(1);
  return (
    <div className='container mx-auto p-4 min-h-screen max-w-5xl'>
         <div className='text-3xl font-bold mb-4 text-center'>Infinite Beers</div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
          <Beers beers={beers} />
          <LoadMore />
         </div>
     </div>
  )
}

export default Infinite
