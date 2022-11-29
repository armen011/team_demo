export const emailValidation = (email: string): boolean => {
    const regex =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return regex.test(email);
};
export const passwordValidation = (password: string): boolean => {
    return password.length >= 6 && !!password;
};

export const userNameValidation = (userName: string): boolean => {
    const condition = isNaN(+(userName[0]));
    return /\d/.test(userName) && userName.length <= 30 && !!userName && userName.length >= 8 && condition;
};

export const fullnameValidation = (fullName: string): boolean => {
    return !!fullName.length;
};
