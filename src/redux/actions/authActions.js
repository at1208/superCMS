import * as types from "../../constants";
import {
  signIn as authSignIn,
  signUp as authSignUp,
  resetPassword as authResetPassword,
} from "../../services/authService";
import { authenticate, signout } from '../../services/authService';

export function signIn(credentials) {
  return async (dispatch) => {
    dispatch({ type: types.AUTH_SIGN_IN_REQUEST });
    return authSignIn(credentials)
      .then((response) => {
        authenticate(response, () => {
          dispatch({
            type: types.AUTH_SIGN_IN_SUCCESS,
            id: response.user._id,
            email: response.user.email,
          });
        })
      })
      .catch((error) => {
        dispatch({ type: types.AUTH_SIGN_IN_FAILURE });
        // console.log(error)
        throw error;
      });
  };
}

export function signUp(credentials) {
  return async (dispatch) => {
    dispatch({ type: types.AUTH_SIGN_UP_REQUEST });

    return authSignUp(credentials)
      .then((response) => {
        dispatch({
          type: types.AUTH_SIGN_UP_SUCCESS,
          id: response.id,
          email: response.email,
          name: response.name,
        });
      })
      .catch((error) => {
        dispatch({ type: types.AUTH_SIGN_UP_FAILURE });
        throw error;
      });
  };
}

export function signOut() {
  return async (dispatch) => {
    signout(() => {
      dispatch({
        type: types.AUTH_SIGN_OUT,
      });
    })
  };
}

export function resetPassword(credentials) {
  return async (dispatch) => {
    dispatch({ type: types.AUTH_RESET_PASSWORD_REQUEST });

    return authResetPassword(credentials)
      .then((response) => {
        dispatch({
          type: types.AUTH_RESET_PASSWORD_SUCCESS,
          email: response.email,
        });
      })
      .catch((error) => {
        dispatch({ type: types.AUTH_RESET_PASSWORD_FAILURE });
        throw error;
      });
  };
}
