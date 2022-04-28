import React, { useState } from 'react'
import { arrayMoveImmutable } from 'array-move'
import { ITEMS } from '../data'

import SortableList from './SortableList';

import './SortableTable.css'


function SortableTable() {
  const [data, setData] = useState(ITEMS)

  let onSortEnd = ({ oldIndex, newIndex }) => {
    setData(() => arrayMoveImmutable(data, oldIndex, newIndex))
  }

  return (
    <div className="table-container">
      <SortableList items={data} onSortEnd={onSortEnd} />
    </div>
  )
}

export default SortableTable


