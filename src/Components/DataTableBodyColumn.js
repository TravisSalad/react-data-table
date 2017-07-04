import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';
import '../Styles/DataTableBodyColumn.css';

export default class DataTableBodyColumn extends Component {
    render() {
        const {
            value,
            columnData,
            item,
            align,
            wordBreak,
            horizontalScroll
        } = this.props;

        const alignText = align === 'left' || align === 'right' || align === 'center' ? align : 'left';
        const breakStyle = wordBreak ? 'break-word' : horizontalScroll ? 'horizontal-scroll' : 'ellipsis';
        const link = columnData.onItemClicked ? 'link' : '';
        const classes = combineClasses('table-body-column', alignText, breakStyle, link);
        return (
            <td
                onClick={columnData.onItemClicked ? columnData.onItemClicked.bind(null, item) : null}
                className={classes}
            >
                {value}
            </td>
        )
    }
}