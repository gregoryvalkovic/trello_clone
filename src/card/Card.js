import React from 'react';
import '../list/List.css';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Card text"
        };
    }
    render() {
        return(
            <div 
                className="card kanban-card"
                id={this.props.id}>
                
                <div className="card-body">
                    {this.state.text}
                </div>
            </div>
        );
    }
}