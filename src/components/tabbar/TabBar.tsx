'use client'

import { getCookie, setCookie } from "cookies-next";
import { useState } from "react"

interface Props {
  currentTab?: number,
  tabOptions?: number[]
}

export const TabBar = ({currentTab = 1, tabOptions = [1,2,3,4,5,6]}: Props) => {

  const [selected, setSelected] = useState(currentTab);
  
  const onTabSelected = (tab:number) => {

    setSelected(tab);

    setCookie('selected-tab', tab.toString());

  }

  const gridColsCalc = `grid-cols-${tabOptions.length}`;
  console.log('Tab Construido')

  return (
    <div className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2 ${gridColsCalc}`}>
      {
        tabOptions.map(tab => (
          <div key={tab}>
          <input type="radio" id={tab.toString()} checked={ selected === tab ? true : false } className="peer hidden" />
          <label 
            onClick={() => onTabSelected(tab)}
            onChange={() => {}}
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
              {tab}
          </label>
        </div>
        ))
      }



      
    </div>
  )
}
