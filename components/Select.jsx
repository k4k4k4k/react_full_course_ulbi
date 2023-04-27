import * as React from 'react';

export default function Select({ defaultValue }) {
  return (
    <>
      <select>
        <option value="">{defaultValue}</option>
        <option value="fun">fun todo</option>
        <option value="boring">boring todo</option>
        <option value="new">new todo</option>
      </select>
    </>
  );
}
