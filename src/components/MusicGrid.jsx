import React from 'react';

class MusicGrid extends React.Component {
    createGrid() {
        let rows = []
        for (let i = 0; i < 10; i++) {
            let cols = []
            for (let j = 0; j < 10; j++) {
                cols.push(<td className="grid-el" key={`${i-j}`}></td>)
            }
            rows.push(<tr className="grid-row" key={i}>{cols}</tr>)
        }
        return rows
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