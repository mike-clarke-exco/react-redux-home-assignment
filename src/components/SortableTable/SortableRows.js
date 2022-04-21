import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { Icon } from '@iconify/react';
import Tooltip from 'react-simple-tooltip';

const Item = ({ className, children }) => (
  <td className={className}>{children}</td>
);

const SortableItem = SortableElement(({ value, columns, actionsConfig }) => (
  <tr>
    {columns.map((col, index) => (
      <Item key={index} className={col.className}>
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
    {actionsConfig &&
      actionsConfig.map((action, index) => (
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
    {items.map((value, index) => (
      <SortableItem
        key={index}
        index={index}
        value={value}
        columns={columns}
        actionsConfig={actions}
      />
    ))}
  </tbody>
));

export default function SortableRows({ name, columns, rows, actions }) {
  const [data, setData] = useState(rows);

  const onListSortEnd = ({ oldIndex, newIndex }) => {
    setData(() => arrayMoveImmutable(data, oldIndex, newIndex));
  };

  return (
    <SortableList
      items={data}
      columns={columns}
      actions={actions}
      onSortEnd={onListSortEnd}
    />
  );
}
