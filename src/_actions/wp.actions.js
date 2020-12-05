import { drivenTypes, wpTypes } from '../_types';

export const wpActions = {
    getAll
};

function resetShared() {
    return { type: wpTypes.WP_RESET_SHARE_JOB };
}

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
                            type: wpTypes.WP_READ_JOB_SUCCESS,
                            datas: response.data
                        });
                    }
                }
            }
        }
    };
}