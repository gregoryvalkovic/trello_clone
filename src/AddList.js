import React from 'react';
import ReactDOM from 'react-dom';
import './List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {List} from './List';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-bootstrap';

export class AddList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nextId: 0};
        this.addList = this.addList.bind(this);
    }

    addList() {
        let list = (
            <li>
                <List id={"list_" + this.state.nextId++}/>
            </li>
        );
        this.props.onClick(list);
    }

    render() {
        return (
            <Button variant="outline-dark"
            onClick={this.addList}>
                <FontAwesomeIcon icon={faPlus}/>Add a list 
            </Button>
        );
    }
}