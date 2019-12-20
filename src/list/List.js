import React from 'react';
import {EditableText} from '../EditableText';
import './List.css';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CardController} from '../card/CardController';

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "List Title"}
        this.delete = this.delete.bind(this);
        this.setText = this.setText.bind(this);
    }
    
    delete() {
        this.props.onDelete(this.props.id);
    }

    dragHandler(e) {
        e.preventDefault();
    }

    dropHandler(e) {

    }

    setText(txt) {
        this.setState({text: txt});
    }

    render() {
        return (
            <div className="card list droppable" 
            id={this.props.id}
            onDragOver={this.dropHandler}
            onDrop={this.dropHandler}
            >
                <div className="card-header">
                    <div className="close-button">
                        <FontAwesomeIcon 
                            icon={faTimesCircle}
                            onClick={this.delete}/>
                    </div>
                    <EditableText
                    text={this.state.text}
                    onChange={this.setText}
                    />
                </div>
                <div className="card-body">
                    <CardController listId={this.props.id} />
                </div>
            </div>  
        );
    }
}