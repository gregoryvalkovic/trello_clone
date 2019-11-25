import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
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
                    <div>
                        List title
                    </div>
                </div>
                <div className="card-body">
                    <CardController listId={this.props.id}/>
                </div>
            </div>  
        );
    }
}