import { drivenTypes } from '../_types';
import { errorActions } from '../_actions';

export const config = {
    GATE_ROOT_URL: 'https://api.covid19api.com/'
};

export const axiosMiddlewareConfig = {
    interceptors: {
        request: [
            (getState, config) => {
                let user = JSON.parse(localStorage.getItem('user'));
                if (user && user.token) {
                    config.headers['Authorization'] = 'Bearer ' + user.token;
                }
                config.headers['Content-Type'] = 'application/json; charset=utf-8';
                config.headers['Set-Cookie'] = 'Secure;SameSite=None';

                return config;
            }
        ],
        response: [
            {
                success: ({ dispatch }, response) => {
                    // set samesite
                    response.headers['Set-Cookie'] = 'HttpOnly;Secure;SameSite=Strict';
                    // handle base status return 
                    if (response.data.status) {
                        dispatch(errorActions.clean());
                    } else {
                        dispatch(errorActions.reqFailure(response.data.messageId));
                    }
                    // hide animate loading
                    dispatch({
                        type: drivenTypes.APP_ANIMATE_INACTIVE
                    });

                    return response;
                },
                error: ({ dispatch }, error) => {
                    // Response Error Interception 
                    if (!error.response && error.message === 'Network Error') {
                        dispatch(errorActions.noConnection());
                    }

                    if (error.response && error.response.status === 404) {
                        dispatch(errorActions.pageNotFound());
                    }
                    // hide animate loading
                    dispatch({
                        type: drivenTypes.APP_ANIMATE_INACTIVE
                    });

                    //history.push(I18n.t('route.ERRORS'));
                    return Promise.reject(error);
                }
            }
        ]
    }
};