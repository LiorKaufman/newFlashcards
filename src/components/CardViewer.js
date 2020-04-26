import React, { Component } from 'react';

export class CardViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardData: {
        front: '',
        back: '',
      },
      isEditing: false,
      editedCard: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      cardData: {
        ...this.state.cardData,
        [e.target.name]: e.target.value,
      },
    });
  };

  // toggler
  handleToggle = (cardId) => {
    const editing = this.state.isEditing;
    this.setState({ isEditing: !editing, editedCard: cardId });
  };

  handleClick = (cardId) => {
    const newCard = {
      // id: cardId,
      front: this.state.cardData.front,
      back: this.state.cardData.back,
    };
    this.props.editCard(cardId, newCard);
    this.setState({
      editedCard: '',
      isEditing: false,
    });
  };

  render() {
    return (
      <div className='container'>
        <h1>Viewer</h1>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Front</th>
              <th scope='col'>Back</th>
              <th scope='col'>Controls</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cards.map((card, index) => {
              return (
                <tr key={card.id}>
                  <th scope='row'>{index + 1}</th>
                  <td>
                    {this.state.isEditing &&
                    card.id === this.state.editedCard ? (
                      <input
                        type='text'
                        value={this.state.cardData.front || ''}
                        name='front'
                        onChange={(e) => this.handleChange(e)}
                      />
                    ) : (
                      card.front
                    )}
                  </td>
                  <td>
                    {this.state.isEditing &&
                    card.id === this.state.editedCard ? (
                      <input
                        type='text'
                        value={this.state.cardData.back || ''}
                        name='back'
                        onChange={(e) => this.handleChange(e)}
                      />
                    ) : (
                      card.back
                    )}
                  </td>
                  <td>
                    <button
                      onClick={(e) => {
                        this.props.deleteCard(card.id);
                      }}
                      className='btn btn-sm btn-danger m-1'
                    >
                      X
                    </button>

                    {!this.state.isEditing && (
                      <button
                        onClick={() => this.handleToggle(card.id)}
                        className='btn btn-sm btn-warning m-1'
                      >
                        Edit
                      </button>
                    )}
                    {this.state.editedCard === card.id && this.state.isEditing && (
                      <div>
                        <button
                          className='btn btn-sm btn-warning m-1'
                          onClick={() => this.handleToggle(card.id)}
                        >
                          Stop Editing
                        </button>
                        <button
                          className='btn btn-sm btn-success m-1'
                          onClick={() => this.handleClick(card.id)}
                        >
                          Confirm
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CardViewer;
