import React from 'react';

export class ListDisplayer extends React.Component {
    
    render() {
        let components;
        if (this.props.lists.length == 0) {
            components = (
                <ol id="list-container">
                </ol>
            );
        }
        else {
            components = (
                <ol id="list-container">
                    {this.props.lists.map((list, index) => (
                        <li key={list.id}>
                            {list}
                        </li>
                    ))}
                </ol>
            );
        }
        return components; 
    }
}