import { createSlice } from '@reduxjs/toolkit';

const sortableTableSlice = createSlice({
  name: 'sortableTable',
  initialState: {
    columns: {},
    rows: {},
  },
  reducers: {
    sortColumns: (state, action) => {
      console.log(action.payload);
      state.columns = action.payload;
    },
    sortRows: (state, action) => {
      state.rows = action.payload;
    },
  },
});

export const { sortColumns } = sortableTableSlice.actions;
export default sortableTableSlice.reducer;
