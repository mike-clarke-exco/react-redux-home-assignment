import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { Icon } from '@iconify/react';

const SortableItem = SortableElement(({ value, ...props }) => (
  <th {...props}>
    <span>
      <Icon icon="material-symbols:drag-indicator" />
    </span>
    {value.header}
  </th>
));

const SortableList = SortableContainer(({ name, columns, actions }) => (
  <thead>
    <tr>
      {columns &&
        columns.map((value, index) => (
          <SortableItem
            key={index}
            index={index}
            value={value}
            className={value.headClassName}
          />
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
  columns,
  actions,
  data,
  onColSortEnd,
}) {
  return (
    <SortableList
      columns={columns}
      actions={actions}
      onSortEnd={onColSortEnd}
      axis="x"
      lockAxis="x"
    />
  );
}
