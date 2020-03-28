import React from 'react'

const GridElement = props => {
    const className = props.selected ? "grid-el-selected" : "grid-el"
    return (
        <td
            className={className}
            onClick={props.click}
            data-row={props.row}
            data-col={props.col}
        ></td>
    )
}

export default GridElement;