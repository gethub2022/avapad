import application from './application/reducer';
import { combineReducers } from '@reduxjs/toolkit';
import multicall from './multicall/reducer';
import transactions from './transactions/reducer';

const reducer = combineReducers({
  application,
  transactions,
  multicall,
});

export default reducer;
