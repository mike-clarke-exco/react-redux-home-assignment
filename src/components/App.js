import React, { useState } from "react";
import {
  arrayMove,
  SortableContainer,
  SortableElement,
} from "react-sortable-hoc";
import { ITEMS } from "./data";

import "./App.css";

const SortableItem = SortableElement(({ value }) => (
  <tr>
    <td>{value.totalHours}</td>
    <td>{value.Hours}</td>
    <td>{value.manualHours}</td>
    <td>{value.ExtraHours}</td>
    <td className="td-worker-name">{value.workerName}</td>
    <td className="td-id">{value.id}</td>
  </tr>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <table>
      <th>סך כל שעות</th>
      <th>שעות</th>
      <th>שעות ידניות</th>
      <th>שעות חריגות</th>
      <th>שם העובד</th>
      <th>מספר ת.ז</th>
      {items.map((value, index) => (
        <SortableItem
          key={`item-${value.workerName}`}
          index={index}
          value={value}
        />
      ))}
    </table>
  );
});

function SortableComponent() {
  const [data, setData] = useState(ITEMS);

  let onSortEnd = ({ oldIndex, newIndex }) => {
    setData(() => arrayMove(data, oldIndex, newIndex));
  };

  return (
    <div className="table-container">
      <SortableList items={data} onSortEnd={onSortEnd} />
    </div>
  );
}
export default SortableComponent;
