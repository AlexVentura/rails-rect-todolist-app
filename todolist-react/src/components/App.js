import React, { Component } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

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
      console.info("***** Component DidMount: ", this.state)
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

    this.setState({ itemInput: '' });
  }

  handleReceivedItems = response => {
    console.info("***** Channel Response: ", response);

    this.setState({ items: response });
  };

  render() {
    return (
      <div>
        <ActionCableConsumer
          channel={{ channel: 'ItemsChannel' }}
          onReceived={this.handleReceivedItems}
        />

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
