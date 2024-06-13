'use client'
import React from 'react';
import { SimpleWidget } from './SimpleWidget';
import { useAppSelector } from '@/store';
import { IoCartOutline } from 'react-icons/io5';
import { FavoritePokemonsWidget } from '@/pokemons/components/FavoritePokemonsWidget';

export const WidgetsGrid = () => {

  const count = useAppSelector(state => state.counter.count);
  
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget 
        title={count.toString()}
        subTitle='Products In Cart'
        label='Counter'
        icon={<IoCartOutline size={50} className='text-blue-500'/>}
        href='/dashboard/counter'
      />
      <FavoritePokemonsWidget />
      
    </div>
  )
}
