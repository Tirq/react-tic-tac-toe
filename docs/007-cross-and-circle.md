# 007-cross-and-circle

[index](index.md)

<details>
<summary>
<i>Create an array to store the values of each suare on the board component, also create a method to handle the click on squares, that will be send to square</i>
</summary>

```
class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(index){
    const squares = this.state.squares.slice();
    squares[index] = 'X';
    this.setState({squares});
  }

  renderSquare(index) {
    return (
      <Square value={this.state.squares[index]}
              onClick={() => this.handleClick(index)}  
      />
    );
  }
```
</details>

<details>
<summary>
<i>Once the value and the clickHandler come to the parent component(Board) it is not more necessary the constructor on the Square</i>
</summary>

```
class Square extends React.Component {
  render() {
    return (
      <button className="square"
              onClick={() => this.props.onClick()} 
      >
        {this.props.value}
      </button>
    );
  }
}
```
</details>



<details>
<summary>
<i>Also it was created a boolean to control when is the turn of X and of O  </i>
</summary>

```
class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(index){
    const squares = this.state.squares.slice();
    squares[index] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext,  
    });
  }


  render() {
    const status = 'Next player: '+ ( this.state.xIsNext ? 'X' : 'O');

```
</details>