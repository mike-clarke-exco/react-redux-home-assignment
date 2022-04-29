import { createSlice } from '@reduxjs/toolkit';

const sortableTableSlice = createSlice({
  name: 'sortableTable',
  initialState: {
    columns: [],
    rows: [],
  },
  reducers: {
    getData: (state, action) => {
      state.columns = action.payload.columns;
      state.rows = action.payload.rows;
    },
    sortColumns: (state, action) => {
      state.columns = action.payload;
    },
    sortRows: (state, action) => {
      state.rows = action.payload;
    },
  },
});

export const { getData, sortColumns, sortRows } = sortableTableSlice.actions;
export default sortableTableSlice.reducer;
