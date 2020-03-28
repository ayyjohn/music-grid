import React from 'react'

const GridColumn = props => {
    const className = props.playing ? "grid-col-playing" : "grid-col"
    return (
        <tr
            className={className}
            key={props.key}
        >
        {props.row}
        </tr>
    )
}

export default GridColumn;