import { drivenTypes, covidType } from '../_types';
import { store } from '../_helpers';

export const covidActions = {
    getAll,
    getByCountry
};

function getAll() {
    const data = JSON.parse(localStorage.getItem('countries'));
    if (data) {
        return store.dispatch({
            type: covidType.GET_ALL_COUNTRY_SUCCESS,
            datas: data
        });
    } else {
        return {
            type: drivenTypes.APP_LOADING_ACTIVE,
            payload: {
                request: {
                    method: 'GET',
                    url: 'countries'
                },
                options: {
                    onSuccess({ getState, dispatch, response }) {
                        if (response.data) {
                            dispatch({
                                type: covidType.GET_ALL_COUNTRY_SUCCESS,
                                datas: response.data
                            });
                            localStorage.setItem('countries', JSON.stringify(response.data));
                        }
                    }
                }
            }
        };
    }
}

function getByCountry(country, fromDate, toDate) {
    return {
        type: drivenTypes.APP_LOADING_ACTIVE,
        payload: {
            request: {
                method: 'GET',
                url: `country/${country}/status/confirmed?from=${fromDate}&to=${toDate}`
            },
            options: {
                onSuccess({ getState, dispatch, response }) {
                    if (response.data) {
                        dispatch({
                            type: covidType.GET_DATA_BY_COUNTRY_SUCCESS,
                            datas: response.data
                        });
                    }
                }
            }
        }
    };
}