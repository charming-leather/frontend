export const setUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
}

export const getUser = () => {
    return JSON.parse(sessionStorage.getItem('user'));
}

export const setToken = (token) => {
    sessionStorage.setItem('token', token);
}

export const getToken = () => {
    const token = sessionStorage.getItem('token');
    return token ? token : null;
}