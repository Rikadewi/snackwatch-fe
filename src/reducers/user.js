import {
    ADD_METRIC
} from "../actions/types";

const initialState = {
    gender: null,
    age: null,
    weight: null,
    height: null,
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
        default:
            return state;
    }
}

export default user;