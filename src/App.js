import React, { useEffect, useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import SortableTable from './components/SortableTable';
import { ITEMS } from './components/data';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getData,
  sortColumns,
  sortRows,
} from './redux/reducers/sortableTableReducer';

const columnsConfig = [
  {
    name: 'id',
    header: 'Worker ID',
    headClassName: 'th-id',
    cellClassName: 'td-id',
  },
  {
    name: 'workerName',
    header: 'Worker Name',
    cellClassName: 'td-worker-name',
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
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.sortableTable.columns);
  const rows = useSelector((state) => state.sortableTable.rows);

  const handleColSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(sortColumns(arrayMoveImmutable(columns, oldIndex, newIndex)));
  };

  const handleRowSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(sortRows(arrayMoveImmutable(rows, oldIndex, newIndex)));
  };

  useEffect(() => {
    dispatch(getData({ columns: columnsConfig, rows: ITEMS }));
    setLoading(false);
  }, [dispatch]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="root">
      <SortableTable
        columns={columns}
        actions={actionsConfig}
        data={rows}
        onColSortEnd={handleColSortEnd}
        onRowSortEnd={handleRowSortEnd}
      />
    </div>
  );
}
