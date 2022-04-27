import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { Icon } from '@iconify/react';
import Tooltip from 'react-simple-tooltip';

const Item = ({ className, children }) => (
  <td className={className}>{children}</td>
);

const SortableItem = SortableElement(({ value, columns, actions }) => (
  <tr>
    {columns &&
      columns.map((col, index) => (
        <Item key={index} className={col.cellClassName}>
          {col.statusIndicator && (
            <span className="statusIndicator">
              <Icon
                icon="mdi:circle"
                color={value.status ? value.status : 'transparent'}
              />
            </span>
          )}
          {value[col.name]}
        </Item>
      ))}
    {actions &&
      actions.map((action, index) => (
        <td key={index} className="td-action">
          <Tooltip
            content={action.tooltip}
            fontSize="8"
            padding={5}
            placement="bottom"
            radius={3}
          >
            <Icon icon={action.icon} color="#7F7F7F" height="24" />
          </Tooltip>
        </td>
      ))}
  </tr>
));

const SortableList = SortableContainer(({ items, columns, actions }) => (
  <tbody>
    {items &&
      items.map((value, index) => (
        <SortableItem
          key={index}
          index={index}
          value={value}
          columns={columns}
          actions={actions}
        />
      ))}
  </tbody>
));

export default function SortableRows({ columns, rows, actions, onRowSortEnd }) {
  return (
    <SortableList
      items={rows}
      columns={columns}
      actions={actions}
      onSortEnd={onRowSortEnd}
    />
  );
}
