import * as React from 'react';

export default function Select({ defaultValue, options, sortPosts, value }) {
  return (
    <>
      <select value={value} onChange={(event) => sortPosts(event.target.value)}>
        <option disabled>{defaultValue}</option>
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
