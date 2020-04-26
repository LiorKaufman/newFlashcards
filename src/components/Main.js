import React, { Component } from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
import uuid from 'react-uuid';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: false,
      cards: [
        {
          id: uuid(),
          front: 'Card 1 front',
          back: 'Card 1 back',
        },
        {
          id: uuid(),
          front: 'Card 2 front',
          back: 'Card 2 back',
        },
        {
          id: uuid(),
          front: 'Card 3 front',
          back: 'Card 3 back',
        },
      ],
    };
  }

  handleToggle = () => {
    const newView = this.state.view;
    this.setState({ view: !newView });
  };

  addCard = (newCard) => {
    this.setState((state) => ({ cards: [...state.cards, newCard] }));
  };

  deleteCard = (cardId) => {
    this.setState((state) => ({
      cards: this.state.cards.filter((card) => card.id !== cardId),
    }));
  };

  // cardId - to find the card
  // card state front and back
  editCard = (cardId, editedCardData) => {
    this.setState((state) => ({
      cards: this.state.cards.map((card) =>
        card.id === cardId
          ? {
              ...card,
              front: editedCardData.front,
              back: editedCardData.back,
            }
          : card
      ),
    }));
  };

  render() {
    return (
      <div>
        {this.state.view ? (
          <CardEditor addCard={this.addCard} />
        ) : (
          <CardViewer
            cards={this.state.cards}
            deleteCard={this.deleteCard}
            editCard={this.editCard}
          />
        )}

        <button className='btn btn-alert' onClick={this.handleToggle}>
          Change view
        </button>
      </div>
    );
  }
}

export default Main;
