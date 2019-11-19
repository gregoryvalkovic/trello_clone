import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import './List.css';

export class List extends React.Component {

    render() {
        return (
            <div className="card" id={this.props.id}>
                <div className="card-header">
                    List title<br/>
                    
                </div>
                <div className="card-body">
                    <Button variant="outline-primary" size="sm">Add a card</Button>
                </div>
            </div>  
        );
    }
}