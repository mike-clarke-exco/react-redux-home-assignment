import React, { useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import SortableColumns from './SortableColumns';
import SortableRows from './SortableRows';
import './style.css';

export default function SortableTable({
  name,
  columnsConfig,
  actionsConfig,
  data,
}) {
  const [columns, setColumns] = useState(columnsConfig);

  const onColSortEnd = ({ oldIndex, newIndex }) => {
    setColumns(() => arrayMoveImmutable(columns, oldIndex, newIndex));
  };

  return (
    <div className="table-container">
      <table>
        <SortableColumns
          name={name}
          columns={columns}
          actions={actionsConfig}
          onColSortEnd={onColSortEnd}
          axis="x"
          lockAxis="x"
        />
        <SortableRows
          name={name}
          columns={columns}
          rows={data}
          actions={actionsConfig}
          axis="y"
          lockAxis="y"
        />
      </table>
    </div>
  );
}
