import * as React from 'react';

export default function Select({ defaultValue }) {
  return (
    <>
      <select>
        <option value="">{defaultValue}</option>
        {/* default value */}
        <option value="fun">fun todo</option>
        <option value="boring" selected>
          boring todo
        </option>
        {/* selected prop */}
        <option value="new">new todo</option>
      </select>
    </>
  );
}
