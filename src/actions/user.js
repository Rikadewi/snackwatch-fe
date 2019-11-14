import {
    ADD_METRIC
} from './types';
import { addMetricApi } from '../api/user';

export const addMetric = (weight, height) => dispatch => {
    const response = addMetricApi(weight, height);
    dispatch(addMetricSuccess(response));
};

export const addMetricSuccess = data => {
    return {
        type: ADD_METRIC,
        weight: data.weight,
        height: data.height,
    };
};
