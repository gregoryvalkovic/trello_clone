import React from 'react';
import '../list/List.css';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {EditableText} from '../EditableText';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Card text"}
        this.deleteCard = this.deleteCard.bind(this);
        this.dragStartHandler = this.dragStartHandler.bind(this);
        this.setText = this.setText.bind(this);
    }

    deleteCard() {
        this.props.onDelete(this.props.id);
    }

    dragStartHandler(e) {
        e.dataTransfer.setData('text', this.state.text);
    }

    setText(txt) {
        this.setState({text: txt});
    }

    render() {
        return(
            <div 
                className="card kanban-card"
                id={this.props.id}
                draggable>
                <div className="card-header">
                    <div className="close-button">
                        <FontAwesomeIcon 
                        icon={faTimesCircle}
                        onClick={this.deleteCard}/>
                    </div>
                    <div className="card-body kanban-card-text">
                        <EditableText 
                        text={this.state.text}
                        onChange={this.setText}
                        />
                    </div>
                </div>
            </div>
        );
    }
}