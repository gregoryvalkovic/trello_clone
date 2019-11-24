import React from 'react';
import './List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-bootstrap';


export class ListDisplayer extends React.Component {    
    render() {
        return (
            <div>
                <ol id="list-container">
                    {this.props.lists.map((list, index) => (
                        <li key={list.props.id}>
                            {list}
                        </li>
                    ))}
                </ol>
                <Button 
                    className="add-list-button"
                    variant="outline-dark"
                    onClick={this.props.onAdd}>
                
                    <FontAwesomeIcon icon={faPlus}/>Add a list 
                </Button>
            </div>
        ); 
    }
}