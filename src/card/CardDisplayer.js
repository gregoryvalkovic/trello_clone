import React from 'react';
import {Button} from 'react-bootstrap';

export class CardDisplayer extends React.Component {
    constructor(props) {
        super(props);
        this.dragEnterHandler = this.dragEnterHandler.bind(this);
        this.dragLeaveHandler = this.dragLeaveHandler.bind(this);
    }

    dragEnterHandler(e) {
        console.log("Drag enter fired at " + this.props.listId);
        console.log(e.srcElement);
    }

    dragLeaveHandler(e) {
        console.log("Drag exit fired at " + this.props.listId);
        console.log(e.srcElement);
    }
    
    render() {
        return (
            <div
            onDrop={this.props.onDrop}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={this.dragEnterHandler}
            onDragLeave={this.dragExitHandler}
            >
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