import {
    ADD_METRIC
} from "../actions/types";

const initialState = {
    weight: null,
    height: null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case ADD_METRIC:
            return {
                ...state,
                weight: action.weight,
                height: action.height,
            };
        default:
            return state;
    }
}

export default user;