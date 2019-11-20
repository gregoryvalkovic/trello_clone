import React from 'react';
import './List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-bootstrap';

export class AddList extends React.Component {
    render() {
        return (
            <Button variant="outline-dark"
            onClick={this.props.onClick}>
                <FontAwesomeIcon icon={faPlus}/>Add a list 
            </Button>
        );
    }
}