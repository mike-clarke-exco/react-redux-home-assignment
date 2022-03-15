import React, { useState } from 'react';
import { arrayMove, SortableContainer, SortableElement, } from 'react-sortable-hoc';
import { ITEMS } from './data';

import './App.css';

const SortableItem = SortableElement(({ value }) => (
    <tr>
        <td className="td-id">{value.id}</td>
        <td className="td-worker-name">{value.workerName}</td>
        <td>{value.ExtraHours}</td>
        <td>{value.manualHours}</td>
        <td>{value.Hours}</td>
        <td>{value.totalHours}</td>
    </tr>
));

const SortableList = SortableContainer(({ items }) => {
    return (
        <table>
            <th>Worker ID</th>
            <th>Worker Name</th>
            <th>Overtime</th>
            <th>Manual Hours</th>
            <th>Hours</th>
            <th>Total Hours</th>
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
