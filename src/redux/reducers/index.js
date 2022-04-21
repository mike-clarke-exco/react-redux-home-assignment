import { combineReducers } from '@reduxjs/toolkit';
import sortableTable from './sortableTableReducer';

const rootReducer = combineReducers({ sortableTable });

export default rootReducer;
