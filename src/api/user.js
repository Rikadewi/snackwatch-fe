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

export const addMetricApi = (gender, weight, height) => {
    return {
        gender: gender,
        weight: weight,
        height: height,
    };
};
