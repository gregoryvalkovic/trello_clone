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
        this.deleteCard = this.deleteCard.bind(this);
    }

    deleteCard(cardId) {
        var array = this.state.cards;
        var index;

        for (let i=0; i < array.length; i++) {
            let currCard = array[i];
            if (currCard.id == cardId) {
                index = i;
                break;
            }
        }
        array.splice(index, 1);
        this.setState({cards: array});
    }

    addCard() {
        let array = this.state.cards;
        array.push(
            <Card 
                id={this.props.listId + "_" + this.state.nextId++}
                onDelete={this.deleteCard}
            />
        );
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