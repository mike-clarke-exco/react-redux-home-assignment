import React from 'react';
import SortableColumns from './SortableColumns';
import SortableRows from './SortableRows';
import './style.css';

export default function SortableTable({
  columns,
  actions,
  data,
  onColSortEnd,
  onRowSortEnd,
}) {
  return (
    <div className="table-container">
      <table>
        <SortableColumns
          columns={columns}
          actions={actions}
          onColSortEnd={onColSortEnd}
          axis="x"
          lockAxis="x"
        />
        <SortableRows
          columns={columns}
          actions={actions}
          rows={data}
          onRowSortEnd={onRowSortEnd}
          axis="y"
          lockAxis="y"
        />
      </table>
    </div>
  );
}
