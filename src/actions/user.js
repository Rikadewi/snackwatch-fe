import {
    ADD_METRIC
} from './types';
import { addMetricApi } from '../api/user';

export const addMetric = (gender, weight, height) => dispatch => {
    const response = addMetricApi(gender, weight, height);
    dispatch(addMetricSuccess(response));
};

export const addMetricSuccess = data => {
    return {
        type: ADD_METRIC,
        gender: data.gender,
        weight: data.weight,
        height: data.height,
    };
};
