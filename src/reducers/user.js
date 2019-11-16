import {
    ADD_METRIC,
    ADD_ALLERGY,
    ADD_ILLNESS
} from "../actions/types";

const initialState = {
    gender: -1,
    age: 0,
    weight: 0,
    height: 0,
    allergies: [],
    illness: [],
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case ADD_METRIC:
            return {
                ...state,
                gender: action.gender,
                age: action.age,
                weight: action.weight,
                height: action.height,
            };
        case ADD_ALLERGY:
            return {
                ...state,
                allergies: action.allergies,
            };
        case ADD_ILLNESS:
            return {
                ...state,
                illness: action.illness,
            };
        default:
            return state;
    }
}

export default user;