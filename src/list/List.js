import React from 'react';
import {EditableText} from '../EditableText';
import './List.css';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CardController} from '../card/CardController';

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    
    delete() {
        this.props.onDelete(this.props.id);
    }

    render() {
        return (
            <div className="card list" id={this.props.id}>
                <div className="card-header">
                    <div className="close-button">
                        <FontAwesomeIcon 
                            icon={faTimesCircle}
                            onClick={this.delete}/>
                    </div>
                    <EditableText text="List title"/>
                </div>
                <div className="card-body">
                    <CardController listId={this.props.id}/>
                </div>
            </div>  
        );
    }
}