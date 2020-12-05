import { combineReducers } from 'redux';

import { _error } from './app.error.reducer';
import { driven } from './app.driven.reducer';
import { page } from './app.page.reducer';
import { covid } from './covid.reducer';

const rootReducer = combineReducers({
    app: combineReducers({ driven, _error, page }),
    covid: covid
});

export default rootReducer;