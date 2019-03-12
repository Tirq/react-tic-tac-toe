# 009-determine-winner

[index](index.md)


<details>
<summary>
<i>Create helper to determine a winner</i>
</summary>

```
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !=null && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```
</details>

<details>
<summary>
<i>Send to Square decision if button will be disabled or not.</i>
</summary>

```
 import React from 'react';
 
 function Square(props){
   return (
    <button className="square" 
            onClick={props.onClick} 
            disabled={props.disabled}>
         {props.value}
       </button>
   );
```
</details>
<details>
<summary>
<i>Change Board to use the helper to determine a winner and if necessary disable squares.</i>
</summary>

```
import {calculateWinner} from './Helper';
 
 class Board extends React.Component {
   constructor(props){
     this.state = {
       ...
       winner: null,
       ...
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
    ...
    
```
</details>
