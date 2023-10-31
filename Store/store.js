import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import students from './reducer';

const rootReducer = combineReducers({students});
const store = createStore(rootReducer);

export default store;
