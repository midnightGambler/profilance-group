import { users } from "../config";
import { SIGN_IN, SIGN_OUT } from "../actions/types";

const defaultState = {
  isAuthorized: false,
  login: "Гость",
  usertype: "guest",
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      const { payload } = action;

      const user = users.find(({ login }) => login === payload.login);

      return {
        isAuthorized: true,
        login: user.login,
        usertype: user.usertype,
      };
    }

    case SIGN_OUT: {
      return defaultState;
    }

    default:
      return state;
  }
};
