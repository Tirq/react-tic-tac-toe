# 006-filled-with-x

[index](index.md)

<details>
<summary>
<i>Add costructor to keep/store value on the Square component. 
Add event when button is clicked, this action will set the value of the button to X
</i>
</summary>

```
class Square extends React.Component {
  constructor(props) {    # new
    super(props);         # new
    this.state = {        # new
      value: null,        # new
    };                    # new
  }                       # new

  render() {
    return (
      <button className="square"
              onClick={() => this.setState({value: 'X'})}  # new
      >
        {this.state.value}                                 # new
      </button>
    );
  }
}
```
</details>

