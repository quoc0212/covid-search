import { drivenTypes } from '../_types';
import moment from 'moment';

const utc = moment().utcOffset() / 60;
const utcNow = moment().subtract(utc, 'hours');

export function driven(state = { loading: false, processing: false, utc, utcNow }, action) {
    switch (action.type) {
        case drivenTypes.APP_LOADING_ACTIVE:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}