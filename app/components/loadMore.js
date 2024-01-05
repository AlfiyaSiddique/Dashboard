"use client"
import React, { useState, useEffect } from 'react'
import {useInView } from 'react-intersection-observer'
import Spinner from './Spinner'
import { fetchBeers } from '../actions/fetch-beers'
import Beers from './Beers/Beers'

const LoadMore = () => {
const [beers, setBeers] = useState([]);
const [pageLoaded, setPageLoaded] = useState(1);
const {ref, inView} = useInView();

const loadMoreBeers =  ()=>{
   setTimeout(async () => {
    const nextPage =  (pageLoaded % 10) +1;
    const newProducts = await fetchBeers(nextPage) ?? [];
    setBeers((prev)=>{
      return [...prev, ...newProducts]
    })
    setPageLoaded(nextPage);
   }, 2000);
}

useEffect(()=>{
    if(inView){
       loadMoreBeers();
    }
}, [inView])

  return (
    <>
    {console.log(typeof beers)}
    <Beers beers={beers} />
      <div className='flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3' ref={ref}>
      <Spinner />
      </div>
    </>
  )
}

export default LoadMore
