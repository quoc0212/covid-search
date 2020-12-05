import { pageTypes } from '../_types';

export const pageActions = {
    change,
    clear
};

function change(value) {
    return { type: pageTypes.APP_PAGE_CHANGE_SUCCESS, value };
}

function clear() {
    return { type: pageTypes.APP_PAGE_CHANGE_CLEAR };
}