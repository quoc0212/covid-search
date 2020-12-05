import { drivenTypes, covidType } from '../_types';

export const covidActions = {
    getAll,
    getByCountry
};

function getAll() {
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
                    }
                }
            }
        }
    };
}

function getByCountry(country) {
    return {
        type: drivenTypes.APP_LOADING_ACTIVE,
        payload: {
            request: {
                method: 'GET',
                url: `country/${country}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-03-05T00:00:00Z`
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