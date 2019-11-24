import React from 'react';
import {CardDisplayer} from './CardDisplayer';
import {Card} from './Card';

export class CardController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            nextId: 0
        };
        this.addCard = this.addCard.bind(this);
    }

    addCard() {
        let array = this.state.cards;
        array.push(<Card id={this.state.nextId++}/>);
        this.setState({cards: array});
    }

    render() {
        return (
            <CardDisplayer
                onAdd={this.addCard}
                cards={this.state.cards}
            />
        );
    }
}