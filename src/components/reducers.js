import { combineReducers } from 'redux';
import confirmationHistory from './ConfirmationHistory/reducers/index.js';

export default combineReducers({
  ...confirmationHistory,
});
