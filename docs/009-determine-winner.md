# 008-function-component

[index](index.md)


<details>
<summary>
<i>When we do not need keep state, it is better use functions components instead of classes components. In this case I changed the Square class to turn a functional component.</i>
</summary>

```
import React from 'react';
import './index.css';

function Square(props){
  return (
    <button className="square" onClick={props.onClick} >
        {props.value}
      </button>
  );
}

export default Square;
```
</details>
