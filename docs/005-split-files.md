# 005-split-files

[index](index.md)

<details>
<summary>
<i>Remove Square class from index and create Square.js with the content removed</i>
</summary>

```
import React from 'react';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

export default Square;
```
</details>

<details>
<summary>
<i>Remove Board class from index and create Board.js importing Square with the content removed</i>
</summary>

```
import React from 'react';
import Square from './Square';
import './index.css';

class Board extends React.Component {

  renderSquare(value) {
    return <Square value={value}/>;
  }

  render() {
    const status = 'Next player: X';

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
```
</details>


<details>
<summary>
<i>Remove Game class from index and create Game.js importing Board with the content removed</i>
</summary>

```
import React from 'react';
import Board from './Board';
import './index.css';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
```
</details>

<details>
<summary>
<i>Import Game in index.</i>
</summary>

```
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

ReactDOM.render(  <Game />,document.getElementById('root') );
```
</details>