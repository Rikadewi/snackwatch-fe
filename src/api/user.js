export const loginApi = (username, password) => {
    return {
        username: username,
        password: password,
    };
};

export const logoutApi = (username) => {
    return {
        username: username,
    };
};

export const addMetricApi = (weight, height) => {
    return {
        weight: weight,
        height: height,
    };
};