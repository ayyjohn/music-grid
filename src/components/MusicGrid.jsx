import React from 'react';
import GridColumn from './GridColumn';
import GridElement from './GridElement';

class MusicGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playingCol: 0,
        };
        this.gridSize = 10;
    }

    componentDidMount() {
        setInterval(this.cyclePlaying, 200)
    }

    cyclePlaying = (prevState, props) => {
        this.setState((prevState, props) => ({
            playingCol: (prevState.playingCol + 1) % this.gridSize
        }))
    }

    createGrid() {
        let cols = []
        for (let i = 0; i < 10; i++) {
            let row = []
            for (let j = 0; j < 10; j++) {
                const name = `${i}-${j}`
                row.push(
                    <GridElement
                        key={name}
                    ></GridElement>
                )
            }
            cols.push(
                <GridColumn
                    playing={i === this.state.playingCol}
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