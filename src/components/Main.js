import React, { Component } from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: true,
      cards: [{}]
    };
  }

  handleToggle = () => {
    const newView = this.state.view;
    this.setState({ view: !newView });
  };

  render() {
    return (
      <div>
        {this.state.view ? <CardEditor /> : <CardViewer />}

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <button className='btn btn-alert' onClick={this.handleToggle}>
          Change view
        </button>
      </div>
    );
  }
}

export default Main;
