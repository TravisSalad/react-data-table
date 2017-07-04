import React, { Component } from 'react';
import DataTableRow from './DataTableRow';
import DataTableBodyColumn from './DataTableBodyColumn';

export default class DataTableBody extends Component {

    constructor(props) {
        super(props);
        this.state={};
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(item, i) {
        const { columns, alignItems, wordBreak, horizontalScroll } = this.props;
        return (
            <DataTableRow body key={i}>
                {columns.map((column, i) => 
                    <DataTableBodyColumn
                        key={`${i}-${item[column.property]}`}
                        align={alignItems}
                        columnData={column}
                        item={item}
                        value={item[column.property]}
                        wordBreak={wordBreak}
                        horizontalScroll={horizontalScroll}
                    />
                )}
            </DataTableRow>
        )
    }

    render () {
        const style={}
        const { data, columns } = this.props;
        const { renderItem } = this;
        return (
            <tbody style={style}>
                {data.map((item, i) => renderItem(item, i))}
            </tbody>
        )
    }
}