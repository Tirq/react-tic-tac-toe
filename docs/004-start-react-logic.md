# 004-start-react-logic

[index](index.md)

<details>
<summary>
<i>Board class - Change the renderSquare method to pass a prop called value to square:  </i>
</summary>

```
renderSquare(value){
  return <Square value={value} /> #new
}
```
</details>

<details>
<summary>
<i>Square class - Change the render method to show a prop called value:  </i>
</summary>

```
<button className="square">
  {this.props.value} #new
</button>
```
</details>



Change Square’s render method to show that value by replacing {/* TODO */} with {this.props.value}