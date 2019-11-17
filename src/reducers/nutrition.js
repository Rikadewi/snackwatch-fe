import {
    ADD_RESPONSE
} from "../actions/types";

const initialState = {
    response: null,
};

const nutrition = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RESPONSE:
            return {
                ...state,
                response: action.response,
            };
        default:
            return state;
    }
}

export default nutrition;
