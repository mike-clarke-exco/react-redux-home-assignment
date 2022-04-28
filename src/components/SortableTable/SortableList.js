import React from 'react'
import { SortableContainer } from 'react-sortable-hoc';

import SortableItem from './SortableItem';


const SortableList = SortableContainer(({ items }) => {
  return (
    <table className='styled-table'>
      <thead>
        <tr>
          <th className='smallCol'></th>
          <th>ID</th>
          <th>Name</th>
          <th>Overtime</th>
          <th>Manual Hours</th>
          <th>Hours</th>
          <th>Total Hours</th>
          <th colSpan='2'></th>
        </tr>
      </thead>
      <tbody>
        {items.map((value, index) => (
          <SortableItem
            key={`item-${value.workerName + index}`}
            index={index}
            value={value}
          />
        ))}
      </tbody>

    </table>
  )
});

export default SortableList


