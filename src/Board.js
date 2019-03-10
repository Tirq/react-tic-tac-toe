import React from 'react';
import Square from './Square';
import {calculateWinner} from './Helper';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
    };
  }

  handleClick(index){
    const squares = this.state.squares.slice();
    squares[index] = this.state.xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext,  
      winner: winner,
    });
  }

  renderSquare(index) {
    return (
      <Square value={this.state.squares[index]}
              onClick={() => this.handleClick(index)}
              disabled={this.state.squares[index] || this.state.winner}  
      />
    );
  }

  render() {
    let status;
    if(this.state.winner != null){
      status = 'Winner: '+ this.state.winner;
    }else{
      status = 'Next player: '+ ( this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;