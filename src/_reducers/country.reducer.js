import { wpTypes } from '../_types';

export function country(state = {}, action) {
    switch (action.type) {
        // reset
        case wpTypes.WP_JOB_RESET:
            return {};
        // read
        case wpTypes.WP_READ_JOB_SUCCESS:
            return {
                ...state,
                countries: action.datas
            };
        default:
            return state;
    }
}