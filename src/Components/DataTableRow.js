import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';
import '../Styles/DataTableRow.css';

export default class DataTableRow extends Component  {
  render() {
    const { body, header } = this.props;
    const classes = combineClasses('table-row', body ? 'table-body-row' : '', header ? 'table-header-row' : '')
    return (
      <tr className={classes}>
        {this.props.children}
      </tr>
    )
  }
}
