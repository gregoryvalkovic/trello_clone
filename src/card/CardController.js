import React from 'react';
import {CardDisplayer} from './CardDisplayer';
import {Card} from './Card';

// This class stores all the cards in a list and allows for creating/deleting
export class CardController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nextId: 0};
        this.addCard = this.addCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.dropHandler = this.dropHandler.bind(this);
        this.getNextId = this.getNextId.bind(this);
    }

    deleteCard(cardId) {
        var array = this.props.cards;
        var index;
        for (let i=0; i < array.length; i++) {
            let currCard = array[i];
            if (currCard.props.id === cardId) {
                index = i;
                break;
            }
        }
        array.splice(index, 1);
        this.props.setCards(array);
    }

    addCard() {
        let array = this.props.cards;
        array.push(
            <Card 
                id={this.props.listId + "_" + this.getNextId()}
                onDelete={this.deleteCard}
            />
        );
        this.props.setCards(array);
    }

    getNextId() {
        var id = this.state.nextId;
        this.setState({nextId: id + 1});
        return id;
    }
    // Add dropped card and delete from previous list
    // TODO: Rework addCard to allow for passing card text
    dropHandler(e) {
        let text = e.dataTransfer.getData("text");
        let array = this.props.cards;
        array.push(
            <Card 
                id={this.props.listId + "_" + this.getNextId()}
                onDelete={this.deleteCard}
                text = {text}
            />
        );
        this.props.setCards(array);
    }

    render() {
        return (
            <CardDisplayer
                onAdd={this.addCard}
                cards={this.props.cards}
                onDrop={this.dropHandler}
            />
        );
    }
}