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
    const value = this.props.squares[index];
    const winner = this.props.winnerInfo;
    let className = 'square' + (!value ? '' : value === 'X' ? ' red' : ' blue');
    if(winner && this.props.winnerInfo.indexes.includes(index)) className+= ' winner';
    return (
      <span key={index}>
        <Square
          className={className}
          value={value}
          onClick={() => this.props.onClick(index)}
          disabled={this.props.squares[index] || winner}  
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