import { combineReducers } from 'redux'

import dataReducer from './dataReducer';
import customerInfo from './customerInfo';

const rootReducer = combineReducers({
    dataReducer,
    customerInfo,

})

export default rootReducer