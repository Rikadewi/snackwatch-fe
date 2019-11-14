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