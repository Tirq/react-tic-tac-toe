# 013-dynamic-board

[index](index.md)

<details>
<summary>
<i>On Board, it was created a method to create the squares dynamically, it is necessary add a key property when a component is build dynamically.</i>
</summary>

```
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
```
</details>

<details>
<summary>
<i>On the renderSquare method, also it was added a key property</i>
</summary>

```
  renderSquare(index) {
    return (
      <span key={index}>
        <Square
          ...
      </span>
    );
  }
```
</details>

<details>
<summary>
<i>Finally, the render method was changed to use the new renderSquares method.</i>
</summary>

```
  render() {
    return (
      <div>{this.renderSquares()}</div>
    );
  }
```
</details>
