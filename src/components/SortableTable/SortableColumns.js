import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import './style.css';

const SortableItem = SortableElement(({ value, ...props }) => (
  <th {...props}>{value.header}</th>
));

const SortableList = SortableContainer(({ name, columns, actions }) => (
  <thead>
    <tr>
      {columns.map((value, index) => (
        <SortableItem key={index} index={index} value={value} />
      ))}
      {actions && (
        <th colSpan={actions.length} className="th-action">
          Actions
        </th>
      )}
    </tr>
  </thead>
));

export default function SortableColumns({
  name,
  columns,
  actionsConfig,
  data,
  onColSortEnd,
}) {
  return (
    <SortableList
      name={name}
      columns={columns}
      actions={actionsConfig}
      onSortEnd={onColSortEnd}
      axis="x"
      lockAxis="x"
    />
  );
}
