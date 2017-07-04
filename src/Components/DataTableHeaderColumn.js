import React, { Component } from 'react';

export default class DataTableHeaderColumn extends Component {

  render() {
    const { value, align } = this.props;  
    const alignText = align === 'left' || align === 'right' || align === 'center' ? align : 'left'
    const style = {
        textAlign: alignText,
        maxWidth: '0px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        wordWrap: 'normal',
        padding: '15px'
    }
    return (
      <th style={style}>{value}</th>
    )
  }
}
