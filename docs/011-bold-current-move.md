# 011-bold-current-move

[index](index.md)


<details>
<summary>
<i>Add css style to turn bold the current move.</i>
</summary>

```
.bold {
  font-weight: bold;
}
```
</details>

<details>
<summary>
<i>When is creating the move buttons, use the bold style when is the current button.</i>
</summary>

```
<li key={move}>
  <button 
      className={this.state.stepNumber === move ? 'bold' : ''}
      onClick={() => this.jumpTo(move)}>{desc}</button>
</li>
```
</details>