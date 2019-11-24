import React from 'react';
import {Button} from 'react-bootstrap';

export class CardDisplayer extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.cards.map((card) => (
                        <li key={card.props.id}>
                            {card}
                        </li>
                    ))}
                </ol>
                <Button 
                    className="add-card-button"
                    variant="outline-primary"
                    size="sm"
                    onClick={this.props.onAdd}>

                    Add a card
                </Button> 
            </div>
        );
    }
}