import React from 'react';
import '../list/List.css';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {EditableText} from '../EditableText';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text || "Card text",
            hoverListId: null
        }
        this.deleteCard = this.deleteCard.bind(this);
        this.dragStartHandler = this.dragStartHandler.bind(this);
        this.dragEndHandler = this.dragEndHandler.bind(this);
        this.setText = this.setText.bind(this);
        this.setHoverListId = this.setHoverListId.bind(this);
    }

    deleteCard() {
        this.props.onDelete(this.props.id);
    }

    dragStartHandler(e) {
        e.dataTransfer.setData('text', this.state.text);
        e.dataTransfer.setData('setHoverListId', this.setHoverListId)
    }

    dragEndHandler(e) {
        this.deleteCard();
    }

    setText(txt) {
        this.setState({text: txt});
    }

    setHoverListId(listId) {
        this.setState({hoverListId: listId})
    }

    render() {
        return(
            <div 
                className="card kanban-card"
                id={this.props.id}
                draggable
                onDragStart={this.dragStartHandler}
                onDragEnd={this.dragEndHandler}
                >
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