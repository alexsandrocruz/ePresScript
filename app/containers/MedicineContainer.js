// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddMedicine from '../components/Medicine';
import { addMedicineActions } from '../actions/medicineFormActions';
import type {MedicineFormStateType} from "../types/state/MedicineFormStateType";

// type State = {
//   medicineForm: MedicineFormStateType
// };

// Map the stuff we want from the global application state in redux to the props
function mapStateToProps(state: State) {
  return {
    medicineForm: state.medicineForm,
    authentication: state.authentication
};
}

// Map any actions required to the props
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      setForm: addMedicineActions.setForm,
      setName: addMedicineActions.setName,
      setStrength: addMedicineActions.setStrength,
      setFrequency: addMedicineActions.setFrequency,
      setRemark: addMedicineActions.setRemark,
      setSubmitted: addMedicineActions.setSubmitted,
      saveMedicine: addMedicineActions.saveMedicine
    },
    dispatch
  );
}
type Props = {};

export default connect(mapStateToProps,mapDispatchToProps)(AddMedicine);
