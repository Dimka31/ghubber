// @flow

import { getUserById } from 'github-flow-js';
import {
    PROFILE_REQUEST,
    PROFILE_REQUEST_SUCCESS,
    PROFILE_REQUEST_FAIL
} from 'constants';

export function fetchProfile(id: string) {
    return dispatch => {
        dispatch({
            type: PROFILE_REQUEST
        });

        //const request = getUserById(id);
    }
}
