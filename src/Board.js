import React from 'react';
import Square from './Square';

class Board extends React.Component {
  
  renderSquares(){
    let rows = [];
    for(let row = 0; row < 3 ; row++){
      let cols = [];
      for(let col=0; col < 3; col++ ){
        cols.push(this.renderSquare(col + (row * 3)));  
      }
      rows.push(<div key={row} className="board-row">{cols}</div>);
    }
    return rows;
  }

  renderSquare(index) {
    return (
      <span key={index}>
        <Square
          value={this.props.squares[index]}
          onClick={() => this.props.onClick(index)}
          disabled={this.props.squares[index] || this.props.winner}  
        />
      </span>
    );
  }

  render() {
    return (
      <div>{this.renderSquares()}</div>
    );
  }
}

export default Board;