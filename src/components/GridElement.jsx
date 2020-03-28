import React from 'react'

const GridElement = props => {
    const className = props.selected ? "grid-el-selected" : "grid-el"
    return (
        <td
            className={className}
        ></td>
    )
}

export default GridElement;