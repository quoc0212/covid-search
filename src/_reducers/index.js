import { combineReducers } from 'redux';

import { _error } from './app.error.reducer';
import { driven } from './app.driven.reducer';
import { page } from './app.page.reducer';
import { country } from './country.reducer';

const rootReducer = combineReducers({
    app: combineReducers({ driven, _error, page }),
    countries: country
});

export default rootReducer;