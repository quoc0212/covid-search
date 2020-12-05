import { errorTypes } from '../_types';

export function _error(state = {}, action) {
    switch (action.type) {
        case errorTypes.APP_ERROR_RESET:
            return {};
        case errorTypes.API_RETURN_SUCCESS:
            return {
                eApi: false
            };
        case errorTypes.API_RETURN_FAILURE:
            return {
                eApi: true,
                messageId: action.msgId
            };
        case errorTypes.APP_NO_CONNECTION:
            return {
                errorConnection: true
            };
        case errorTypes.APP_PAGE_NOT_FOUND:
            return {
                pageNotFound: true
            };
        default:
            return state;
    }
}