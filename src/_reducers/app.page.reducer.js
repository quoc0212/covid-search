import { pageTypes } from '../_types';

export function page(state = { current: ''}, action) {
    switch (action.type) {
        case pageTypes.APP_PAGE_CHANGE_SUCCESS:
            return {
                current: action.value
            };
        case pageTypes.APP_PAGE_CHANGE_CLEAR:
            return {
                current: ''
            };
        default:
            return state;
    }
}