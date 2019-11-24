import React from 'react';
import './List.css';
import { ListDisplayer } from './ListDisplayer';
import {List} from './List';

export class ListController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            nextId: 0
        };
        this.addList = this.addList.bind(this);
        this.deleteList = this.deleteList.bind(this);
    }

    addList() {
        let list = <List 
            id={"list_" + this.state.nextId++}
            onDelete={this.deleteList}
        />

        var array = this.state.lists;
        array.push(list);
        this.setState({lists: array});
    }

    deleteList(listId) {
        var index;
        var array = this.state.lists;

        // Find the index of the list to be deleted
        for (let i=0; i < this.state.lists.length; i++) {
            let currList = this.state.lists[i];
            if (currList.props.id == listId) {
                index = i;
                break;
            }
        }
        console.log("Deleting list: " + listId);
        array.splice(index, 1);
        this.setState({lists: array});
        console.log("lists is now: " + this.state.lists);
    }

    render() {
        return (
                <ListDisplayer 
                    lists={this.state.lists}
                    onDelete={this.deleteList}
                    onAdd={this.addList}
                />
        );
    }
}