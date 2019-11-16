import {
    ADD_METRIC,
    ADD_ALLERGY,
    ADD_ILLNESS,
    ADD_BIO
} from "../actions/types";

const initialState = {
    gender: -1,
    age: 0,
    weight: 0,
    height: 0,
    allergy: [],
    illness: [],
    name: '',
    username: '',
    password: '',
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
                allergy: action.allergy,
            };
        case ADD_ILLNESS:
            return {
                ...state,
                illness: action.illness,
            };
        case ADD_BIO:
            return {
                ...state,
                name: action.name,
                username: action.username,
                password: action.password,
            };
        default:
            return state;
    }
}

export default user;