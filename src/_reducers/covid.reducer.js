import { covidType } from '../_types';

export function covid(state = {countries: [], data: []}, action) {
    switch (action.type) {
        // Get all country
        case covidType.GET_ALL_COUNTRY_SUCCESS:
            return {
                ...state,
                countries: action.datas.map(country => {
                    return country != null ? { key: country["Slug"], value: country["Slug"], text: country["Country"] } : {}
                })
            };
        case covidType.GET_DATA_BY_COUNTRY_SUCCESS:
            return {
                ...state,
                data: action.datas
            }
        // Get data by country
        default:
            return state;
    }
}