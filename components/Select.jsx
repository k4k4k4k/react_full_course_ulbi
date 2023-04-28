import * as React from 'react';
import {useRef} from 'react'

export default function Select({ defaultValue, options, sortPosts }) {
  const ref = useRef()
  return (
    <>
      <select
        onChange={(sort) => console.log(sort.target.value)}
        // value={'name'}
        onClick={()=>console.log(ref.current.value)} 
        ref={ref}
      >
        <option>{defaultValue}</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      <select>
        <option>lll</option>
      </select>
    </>
  );
}
