import React, { Component } from 'react';
import { API_ROOT, HEADERS } from '../utils/constants';

class ItemsList extends Component {
  onCompleteHandler = (itemId) => (e) => {
    e.preventDefault();

    console.info(itemId)

    fetch(`${API_ROOT}/items/${itemId}`, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({is_done: true})
    });

    //this.setState({ itemInput: '' });
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => {
            return (
              <li
                onClick={this.onCompleteHandler(item.id)}
                key={index}
              >
                {item.description}
              </li>
            );
          })}
        </ul>
        Total Items: {this.props.items.length}
      </div>
    );
  };
};

export default ItemsList;
