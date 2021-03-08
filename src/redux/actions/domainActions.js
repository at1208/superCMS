import * as types from "../../constants";
import {
   createDomain as createDomainAction,
   getDomains as getDomainsAction
} from "../../services/domainService";


export function getDomains() {
  return async (dispatch) => {
    // dispatch({ type: types.AUTH_SIGN_IN_REQUEST });
    return getDomainsAction( )
      .then((response) => {
            console.log(response)
        // authenticate(response, () => {
        //   dispatch({
        //     type: types.AUTH_SIGN_IN_SUCCESS,
        //     id: response.user._id,
        //     email: response.user.email,
        //   });
        // })
      })
      .catch((error) => {
        // dispatch({ type: types.AUTH_SIGN_IN_FAILURE });
        throw error;
      });
  };
}
