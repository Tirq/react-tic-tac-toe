# 015-colors

[index](index.md)

<details>
<summary>
<i>Add new elements on css file</i>
</summary>

```
.red {
  color: red;
}

.blue {
  color: blue;
}

.winner {
  text-decoration: underline;
}
```
</details>

<details>
<summary>
<i>Change the calculateWinner method to return the winner and the indexes of the winner.</i>
</summary>

```
export function calculateWinner(squares) {
  ...
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {winner: squares[a], indexes: [a,b,c]};
    ...
}
```
</details>


<details>
<summary>
<i>Change the square class to receive the className</i>
</summary>

```
function Square(props){
  return (
    <button className={props.className} 
    ...
```
</details>


<details>
<summary>
<i>Change Game class to keep and use the winnerInfo(winner and indexes) instead of only the winner</i>
</summary>

```
class Game extends React.Component {
  constructor(props){
    ...
    winnerInfo: null,
    ...
```
```
 handleClick(index){
    ...
    const winnerInfo = calculateWinner(squares);
    this.setState({
      history: history.concat([{
        ...  
        winnerInfo: winnerInfo,
        ...
```
```
return (
      ...
      winnerInfo={current.winnerInfo}
      ...
```
</details>


<details>
<summary>
<i>Change the board class to decide wich color will be sent to square, and the winner played, in this case to underline the three moves who give the win to the winner.</i>
</summary>

```
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
```
</details>