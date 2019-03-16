# 014-determine-draw

[index](index.md)

<details>
<summary>
<i>Change the getGameState to determine when is draw, receiving also the step count from render method.</i>
</summary>

```
getGameState(current,stepNumber){
    if(current.winner) return 'Winner: '+ current.winner;
    if(stepNumber === 9) return 'Draw!';
    return 'Next player: '+ ( current.xIsNext ? 'X' : 'O');
  }
```

```
  render() {
    const stepNumber = this.state.stepNumber;
    ...
    let status = this.getGameState(current,stepNumber);
```
</details>