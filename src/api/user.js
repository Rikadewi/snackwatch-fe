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

export const addMetricApi = (gender, age, weight, height) => {
    return {
        gender: gender,
        age: age,
        weight: weight,
        height: height,
    };
};
