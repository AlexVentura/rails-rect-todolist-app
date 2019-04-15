import React, { Component } from 'react';
import ItemsList from './ItemsList';
import { API_ROOT, HEADERS } from '../utils/constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInput: '',
      items: []
    };
  }

  componentDidMount = () => {
    fetch(`${API_ROOT}/items`)
      .then(res => res.json())
      .then(items => this.setState({ items }));
      console.info("didMount: ", this.state)
  };

  onChangeHandler = (event) => {
    this.setState({ itemInput: event.target.value });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    fetch(`${API_ROOT}/items`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({description: this.state.itemInput})
    });

    this.setState({
      itemInput: '',
      items: [...this.state.items, { description: this.state.itemInput }]
    });
    console.info("onSubmit: ", this.state)
  }

  render() {
    return (
      <div>
        <ItemsList items={this.state.items} />
        <form className="App" onSubmit={this.onSubmitHandler}>
          <input value={this.state.itemInput} onChange={this.onChangeHandler} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;