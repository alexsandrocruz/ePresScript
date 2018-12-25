// @flow
import React, { Component } from 'react';
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";

type Props = {
  medicineForm: AddMedicineFormStateType,
  setForm: (form: string) => void,
  setName: (name: string) => void,
  setStrength: (strength: string) => void,
  setFrequency: (frequency: string) => void,
  setRemark: (remark: string) => void,
  setSubmitted: (submitted: boolean) => void
};

class Treatment extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);
    console.log('in Treatment constructor');
    console.log(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1> Add a Treatment </h1>
      </div>
    );
  }
}

export default (Treatment);
