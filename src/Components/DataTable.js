import React, { Component } from 'react';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';

export default class DataTable extends Component {

  render() {
    const {
      data,
      columns,
      alignItems,
      horizontalScroll,
      wordBreak
    } = this.props;
    const style = {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: wordBreak ? 'fixed' : 'auto'
    }
    return (
      <div style={horizontalScroll ? {height: 'auto', overflow: 'auto'} : {overflow: 'hidden'}}>
        <table style={style}>
          <DataTableHeader
            columns={columns}
            alignItems={alignItems}
          />
          <DataTableBody
            wordBreak={wordBreak}
            horizontalScroll={horizontalScroll}
            data={data}
            columns={columns}
            alignItems={alignItems}
          />
        </table>
      </div>
    )
  }
}
