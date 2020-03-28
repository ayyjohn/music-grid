import React from 'react'

const GridColumn = props => {
    const className = props.playing ? "grid-col-playing" : "grid-col"
    return (
        <tr
            className={className}
            data-playing={props.playing}
        >
        {props.row}
        </tr>
    )
}

export default GridColumn;