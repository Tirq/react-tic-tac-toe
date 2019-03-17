import React from 'react';
import Board from './Board';
import {calculateWinner} from './Helper';
import './index.css';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        xIsNext: true,
        winnerInfo: null,
        played: null,
      }],
      stepNumber:0,
    };
  }

  handleClick(index){
    const history = this.state.history.slice(0,this.state.stepNumber+1);
    const lastIndex = history.length-1;
    const current = history[lastIndex];
    const squares = current.squares.slice();
    squares[index] = current.xIsNext ? 'X' : 'O';
    const winnerInfo = calculateWinner(squares);
    this.setState({
      history: history.concat([{
        squares: squares,
        xIsNext: !current.xIsNext,  
        winnerInfo: winnerInfo,
        played: index,
      }]),
      stepNumber: history.length,  
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
    });
  }

  getGameState(current,stepNumber){
    if(current.winnerInfo) return 'Winner: '+ current.winnerInfo.winner;
    if(stepNumber === 9) return 'Draw!';
    return 'Next player: '+ ( current.xIsNext ? 'X' : 'O');
  }

  buildLabelHistory(move, played){
    if(!move) return 'Go to game start';
    let row = Math.floor(played / 3)+1;
    let col = (played % 3)+1;
    return `Go to move # ${move} row: ${row} col: ${col}`;
  }

  render() {
    const history = this.state.history;
    const stepNumber = this.state.stepNumber;
    const current = history[stepNumber];
    const moves = history.map((step,move) => {
      let desc = this.buildLabelHistory(move, step.played);
      return (
        <li key={move}>
          <button 
              className={this.state.stepNumber === move ? 'bold' : ''}
              onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status = this.getGameState(current,stepNumber);

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            winnerInfo={current.winnerInfo}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;  