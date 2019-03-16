# 012-show-coordinates

[index](index.md)

<details>
<summary>
<i>Save a new state to keep the position played</i>
</summary>

```
class Game extends React.Component {
  ...
    this.state = {
      history: [{
        ...
        played: null, 
```
</details>

<details>
<summary>
<i>Using the handleClick method, save the position played</i>
</summary>

```
handleClick(index){
    ...
    this.setState({
      history: history.concat([{
        ...
        played: index,
```
</details>

<details>
<summary>
<i>Created new method to build a label from each history, 
also responsible to split the row and the column played</i>
</summary>

```
buildLabelHistory(move, played){
    if(!move) return 'Go to game start';
    let row = Math.floor(played / 3)+1;
    let col = (played % 3)+1;
    return `Go to move # ${move} row: ${row} col: ${col}`;
  }
```
</details>

<details>
<summary>
<i>Using the new method to add label on the history buttons</i>
</summary>

```
 render() {
     ...
     let desc = this.buildLabelHistory(move, step.played);
       return (
        ...
          <button 
              ...
              onClick={() => this.jumpTo(move)}>{desc}</button>
```
</details>