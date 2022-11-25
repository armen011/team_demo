export const loginValidation = (inputValues: {
  login: string;
  password: string;
}) => {
  switch (true) {
    case inputValues.login === "": {
      return false;
    }
    case inputValues.login.includes(' '): {
      return false;
    }
    case inputValues.password.length < 8: {
      return false;
    }
    default:
      return true;
  }
};
