import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import './List.css';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            id: this.props.id}
        this.getId = this.getId.bind(this);
        this.delete = this.delete.bind(this);
    }
    
    getId() {
        return this.state.id;
    }

    delete() {
        this.props.onDelete(this.state.id);
    }

    render() {
        return (
            <div className="card" id={this.props.id}>
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
                    <Button variant="outline-primary" size="sm">Add a card</Button>
                </div>
            </div>  
        );
    }
}