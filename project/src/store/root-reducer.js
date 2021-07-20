import {combineReducers} from 'redux';
import {ReducerType} from '../const';
import {appAction} from './app-action/app-action';
import {user} from './user/user';
import {data} from './data/data';

export default combineReducers({
  [ReducerType.APP]: appAction,
  [ReducerType.USER]: user,
  [ReducerType.DATA]: data,
});
