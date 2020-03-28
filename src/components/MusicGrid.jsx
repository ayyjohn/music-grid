import React from 'react';
import GridColumn from './GridColumn';
import GridElement from './GridElement';

class MusicGrid extends React.Component {
    createGrid() {
        let cols = []
        for (let i = 0; i < 10; i++) {
            let row = []
            for (let j = 0; j < 10; j++) {
                row.push(
                    <GridElement
                        selected={(i === 0 || i === 3) && j === 5}
                        key={`${i}-${j}`}
                    ></GridElement>
                )
            }
            cols.push(
                <GridColumn
                    playing={i === 0}
                    key={`${i}`}
                    row={row}
                >
                </GridColumn>
            )
        }
        return cols
    }

    render() {
        return (
            <table id="music-grid-table">
                <tbody id="music-grid-table-body">
                    {this.createGrid()}
                </tbody>
            </table>
        )
    }
}

export default MusicGrid;