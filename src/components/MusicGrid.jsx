import React from 'react';
import GridColumn from './GridColumn';
import GridElement from './GridElement';
import Pizzicato from 'pizzicato';

class MusicGrid extends React.Component {
    constructor(props) {
        super(props);
        this.gridSize = 8;
        let selectedElements = []
        this.sounds = []
        for (let i = 1; i <= 10; i++) {
            let sound = new Pizzicato.Sound(process.env.PUBLIC_URL + `/notes/a_${i}.wav`);
            // let sound = new Audio(process.env.PUBLIC_URL + `/notes/a_${i}.wav`)
            this.sounds.push(sound);
        }
        for (let i = 0; i < this.gridSize; i++) {
           selectedElements[i] = new Array(this.gridSize)
           selectedElements[i].fill(false)
        }
        this.state = {
            playingCol: 0,
            selectedElements
        };
        // start playing "only" by nicki minaj
        this.state.selectedElements[0][3] = true;
        this.state.selectedElements[2][6] = true;
        this.state.selectedElements[4][7] = true;
        this.state.selectedElements[6][6] = true;
        console.log(selectedElements);

    }

    componentDidMount() {
        setTimeout(() => {
            this.playNotes();
            setInterval(this.cyclePlaying, 500);
        }, 500);
    }

    cyclePlaying = () => {
        this.setState((prevState, props) => ({
            playingCol: (prevState.playingCol + 1) % this.gridSize
        }), this.playNotes)
    }

    playNotes = () => {
        const currentCol = this.state.playingCol;
        const selectedColumn = this.state.selectedElements[currentCol]
        for (let i = 0; i < selectedColumn.length; i++) {
            if (selectedColumn[i]) {
                this.sounds[i].currentTime = 0;
                this.sounds[i].play(0)
            }
        }
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
        for (let i = 0; i < this.gridSize; i++) {
            let row = []
            for (let j = 0; j < this.gridSize; j++) {
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