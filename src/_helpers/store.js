import { applyMiddleware, compose, createStore } from 'redux';
import { axiosMiddlewareConfig, config } from '../_helpers';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from '../_reducers';
import thunkMiddleware from 'redux-thunk';

const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL: config.GATE_ROOT_URL,
    responseType: 'json',
    timeout: 30000
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunkMiddleware,
            axiosMiddleware(client, axiosMiddlewareConfig),
        )
    )
);