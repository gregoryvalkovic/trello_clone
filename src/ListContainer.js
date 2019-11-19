import React from 'react';
import './List.css';
import {AddList} from './AddList';

export class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lists: []};
        this.addList = this.addList.bind(this);
    }

    addList(listComp) {
        this.setState(prevState => ({
            lists: [prevState.lists, listComp]
        }));
    }

    render() {
        let components;
        if (this.state.lists.length == 0) {
            components = (
                <ol id="list-container">
                </ol>
            );
        }
        else {
            components = (
                <ol id="list-container">
                    {this.state.lists.map((item, index) => (
                        <li>
                            {item};
                        </li>
                    ))}
                </ol>
            );
        }

        return (
            <div>
                {components}
                <AddList onClick={this.addList}/>
            </div>
        ); 
    }
}