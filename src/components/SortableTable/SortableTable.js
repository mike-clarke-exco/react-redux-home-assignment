import React, { useState } from 'react'
import { arrayMoveImmutable } from 'array-move'
import { useSelector } from 'react-redux'
import SortableList from './SortableList';

import './SortableTable.css'


function SortableTable() {

  const Items = useSelector(state => state.workReport);
  const [data, setData] = useState(Items)

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


