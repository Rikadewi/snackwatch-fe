import {
    ADD_RESPONSE,
} from './types';


export const handleResponse = (response) => {
    return {
        type: ADD_RESPONSE,
        response: response,
    };
};
