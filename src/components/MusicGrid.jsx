import React from 'react';
import GridColumn from './GridColumn';
import GridElement from './GridElement';

class MusicGrid extends React.Component {
    constructor(props) {
        super(props);
        this.gridSize = 10;
        let selectedElements = []
        for (let i = 0; i < 10; i++) {
           selectedElements[i] = new Array(10)
           selectedElements[i].fill(false)
        }
        this.state = {
            playingCol: 0,
            selectedElements
        };
        console.log(selectedElements);

    }

    componentDidMount() {
        setInterval(this.cyclePlaying, 200)
    }

    cyclePlaying = (prevState, props) => {
        this.setState((prevState, props) => ({
            playingCol: (prevState.playingCol + 1) % this.gridSize
        }))
    }

    toggleSelected = e => {
        let {row, col} = e.currentTarget.dataset;
        console.log(e.currentTarget.dataset);
        console.log(e.currentTarget.dataset);

        console.log(parseInt(row))
        console.log(parseInt(col))
        let nextSelectedElements = this.state.selectedElements;

        const selected = nextSelectedElements[col][row]
        nextSelectedElements[col][row] = !selected;
        this.setState({
            selectedElements: nextSelectedElements
        });
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
                        selected={this.state.selectedElements[i][j]}
                        click={this.toggleSelected}
                        row={j}
                        col={i}
                    ></GridElement>
                )
            }
            cols.push(
                <GridColumn
                    playing={i === this.state.playingCol}
                    key={i}
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