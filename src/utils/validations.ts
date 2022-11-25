export const emailValidation = (email: string): boolean => {
  const regex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return regex.test(email);
};
export const passwordValidation = (password: string): boolean => {
  return password.length >= 6 && !!password;
};

export const userNameValidation = (userName: string): boolean => {
  return /\d/.test(userName) && userName.length <= 30 && !!userName;
};

export const phoneValidation = (phone: string): boolean => {
  return !/\d/.test(phone);
};
