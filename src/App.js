import React from 'react';
import SortableTable from './components/SortableTable';
import { ITEMS } from './components/data';
import './App.css';

const columnsConfig = [
  { name: 'id', header: 'Worker ID', className: 'td-id' },
  {
    name: 'workerName',
    header: 'Worker Name',
    className: 'td-worker-name',
    statusIndicator: true,
  },
  { name: 'extraHours', header: 'Overtime' },
  { name: 'manualHours', header: 'Manual Hours' },
  { name: 'hours', header: 'Hours' },
  { name: 'totalHours', header: 'Total Hours' },
];

const actionsConfig = [
  { icon: 'mdi:chart-bar', tooltip: 'Graph' },
  { icon: 'mdi:dots-vertical', tooltip: 'More' },
];

export default function App() {
  return (
    <div className="root">
      <SortableTable
        name="homeTest"
        columnsConfig={columnsConfig}
        actionsConfig={actionsConfig}
        data={ITEMS}
      />
    </div>
  );
}
