import {
    ADD_METRIC,
    ADD_ALLERGY,
    ADD_ILLNESS,
    ADD_BIO
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

export const addAllergy = (allergy) => {
    return {
        type: ADD_ALLERGY,
        allergy: allergy,
    };
};

export const addIllness = (illness) => {
    return {
        type: ADD_ILLNESS,
        illness: illness,
    };
};

export const addBio = (name, username, password) => {
    return {
        type: ADD_BIO,
        name: name,
        username: username,
        password: password,
    };
};
