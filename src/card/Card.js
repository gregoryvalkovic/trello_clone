import React from 'react';
import '../list/List.css';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Card text"
        };
        this.deleteCard = this.deleteCard.bind(this);
    }

    deleteCard() {
        this.props.onDelete(this.props.id);
    }

    render() {
        return(
            <div 
                className="card kanban-card"
                id={this.props.id}>
                <div className="card-header">
                    <div className="close-button">
                        <FontAwesomeIcon 
                            icon={faTimesCircle}
                            onClick={this.deleteCard}/>
                    </div>
                    <div className="card-body kanban-card-text">
                        {this.state.text}
                    </div>
                </div>
            </div>
        );
    }
}