import React from 'react'

const GridElement = props => {
    const className = props.selected ? "grid-el-selected" : "grid-el"
    return (
        <td
            className={className}
            key={props.key}
        ></td>
    )
}

export default GridElement;