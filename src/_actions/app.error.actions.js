import { errorTypes } from '../_types';

export const errorActions = {
    clean,
    reqFailure,
    reqSuccess,
    noConnection,
    pageNotFound
};

function clean() {
    return { type: errorTypes.APP_ERROR_RESET };
}

function reqFailure(value) {
    return { type: errorTypes.API_RETURN_FAILURE, msgId: value };
}

function reqSuccess() {
    return { type: errorTypes.API_RETURN_SUCCESS };
}

function noConnection() {
    return { type: errorTypes.APP_NO_CONNECTION };
}

function pageNotFound() {
    return { type: errorTypes.APP_PAGE_NOT_FOUND };
}
