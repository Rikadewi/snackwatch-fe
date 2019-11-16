import {
    ADD_METRIC
} from './types';
import { addMetricApi } from '../api/user';

export const addMetric = (gender, age, weight, height) => dispatch => {
    const response = addMetricApi(gender, age, weight, height);
    dispatch(addMetricSuccess(response));
};

export const addMetricSuccess = data => {
    return {
        type: ADD_METRIC,
        gender: data.gender,
        age: data.age,
        weight: data.weight,
        height: data.height,
    };
};
