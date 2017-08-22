import React from 'react'


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};


  }
  

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.props.handleChange}  />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
          <button onClick={this.handleDelete} value="delete"> </button>
        </form>
      </div>
    );
  }

  // handleChange(e) {
  //   this.setState({text: e.target.value});
  // }
  handleChange = (e) => {
    this.setState({text: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    var newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }))
  }
  handleDelete = () => {
    var newArray = [];
    this.setState({
      items: newArray
    })
  }
//   handleSubmit(e) {
//     e.preventDefault();
//     var newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState((prevState) => ({
//       items: prevState.items.concat(newItem),
//       text: ''
//     }));
//   }
}

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
//}

const TodoList = (props) => (
  <ul>
    {props.items.map(item => (
      <li key={item.id}>{item.text}</li>
  ))}
  </ul>  
)
export default TodoApp
