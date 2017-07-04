import React, { Component } from 'react';
import DataTableHeaderColumn from './DataTableHeaderColumn';
import DataTableRow from './DataTableRow';

export default class DataTableHeader extends Component {

  render() {
    const style = {}
    const { columns, alignItems } = this.props;
    return (
      <thead style={style}>
        <DataTableRow header>
          {columns.map((column, i) => 
            <DataTableHeaderColumn
              key={`${i}-${column}`}
              align={alignItems}
              value={column.title}
            />
          )}
        </DataTableRow>
      </thead>
    )
  }
}
