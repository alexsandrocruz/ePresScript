import {constants} from './constants';
import {services} from "./services";
import {SNACKBAR_OPEN} from "../ui/constants";
import type {Store} from "../../store/reducers/types";

export const treatmentActions = {
  saveTreatment,
  fetchTreatment
};

export function saveTreatment(value: object) {
  console.log("inside saveTreatment");
  return (dispatch: any) => {
    services.saveMedicine(value).then(
      (medicine ) => {
        if (medicine) {
          const msg = `New medicine added!`;
          dispatch(success(medicine, msg));
        } else {
          const errorString = `Please Check the details you have provided!`;
          dispatch(failure(errorString));
        }
      },
      (error: any) => {
        const errorString = `Cannot save the Medicine`;
        dispatch(failure(errorString));
      }
    );
  };
  function success(medicine , msg) { return {
    type: constants.SAVE_MEDICINE_SUCCESS,
    medicine
  }}
  function failure(error) {
    return {
      type:SNACKBAR_OPEN,
      message: error,
      variant: 'error'
    }
  }
}

export function fetchTreatment() {
  return (dispatch , getState: Store) => {
    const { securityState } = getState();
    const { access_token } = securityState.user;

    dispatch(request());
    services.fetchTreatment(access_token)
      .then(
        (treatment) => {
          dispatch(success(treatment));
        },
        (error: any) => {
          dispatch(failure(error));
        }
      );
  };

  function request() { return { type: constants.FETCH_TREATMENT_REQUEST} }
  function success(treatment: Object ){
    return {
      type: constants.FETCH_TREATMENT_SUCCESS, treatment
    }
  }
  function failure(error) {
    return {
      type: constants.FETCH_TREATMENT_FAILURE , error
    }
  }
}
