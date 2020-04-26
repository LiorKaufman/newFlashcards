import React, { Component } from 'react';

import uuid from 'react-uuid';
export class CardEditor extends Component {
  constructor(props) {
    super(props);

    this.state = { id: '', front: '', back: '' };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleClick = () => {
    const newCard = {
      id: uuid(),
      front: this.state.front,
      back: this.state.back,
    };
    this.props.addCard(newCard);
    this.setState({ id: '', front: '', back: '' });
  };
  render() {
    return (
      <div>
        <h1>Card Editor</h1>
        <input
          type='text'
          value={this.state.front}
          name='front'
          onChange={this.handleChange}
        />
        <input
          type='text'
          value={this.state.back}
          name='back'
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add Card</button>
      </div>
    );
  }
}

export default CardEditor;
