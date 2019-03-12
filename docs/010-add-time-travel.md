# 010-add-time-travel

[index](index.md)


<details>
<summary>
<i>The board component does not need keep state, once the game will be resposible for that. It was removed the constructor and the content of the fieldfield are comming from the parent(game) as props.</i>
</summary>

```
class Board extends React.Component {
  renderSquare(index) {
    return (
      <Square
        value={this.props.squares[index]}
        onClick={() => this.props.onClick(index)}
        disabled={this.props.squares[index] || this.props.winner}  
      />
    );
  }
```
</details>

<details>
<summary>
<i>Created a constructor to keep state of the game, and also have the oportunity to come back on the moves of the game, using a history.</i>
</summary>

```
class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        xIsNext: true,
        winner: null,
      }],
      stepNumber:0,
    };
  }
```
</details>
<details>
<summary>
<i>The handleClick method now belongs to Game and is saving every move on the history list.</i>
</summary>

```
 handleClick(index){
    const history = this.state.history.slice(0,this.state.stepNumber+1);
    const lastIndex = history.length-1;
    const current = history[lastIndex];
    const squares = current.squares.slice();
    squares[index] = current.xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
    this.setState({
      history: history.concat([{
        squares: squares,
        xIsNext: !current.xIsNext,  
        winner: winner,
      }]),
      stepNumber: history.length,  
    });
  }
```
</details>
<details>
<summary>
<i>Created method on the game component responsible to go between moves.</i>
</summary>

```
jumpTo(step){
    this.setState({
      stepNumber: step,
    });
  }
```
</details>
<details>
<summary>
<i>Created method responsible to get the status of the game</i>
</summary>

```
getGameState(current){
    if(current.winner){
      return 'Winner: '+ current.winner;
    }else{
      return 'Next player: '+ ( current.xIsNext ? 'X' : 'O');
    }
  }
```
</details>
<details>
<summary>
<i>First part of the render method responsible to create the button to see the history and go back on a specific move of the game.</i>
</summary>

```
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const moves = history.map((step,move) => {
      const desc = move ? 'Go to move #'+ move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
```
</details>
<details>
<summary>
<i>Second part of the render method responsible to create and manage the children componenet, agt this case, the board component.</i>
</summary>

```
 let status = this.getGameState(current);

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            winner={current.winner}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
```
</details>
