import React from 'react';

export class EditableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isEditing: false}
        this.renderInput = this.renderInput.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    renderInput() {
        return(
            <div onDoubleClick={this.toggleEdit}>
                <input
                type="text"
                value={this.props.text}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                onBlur={this.props.toggleEdit}
                />
            </div>
        );
    }

    renderDisplay() {
        return (
            <div onDoubleClick={this.toggleEdit}>
                {this.props.text}
            </div>
        )
    }

    toggleEdit() {
        var newState = this.state.isEditing ? false : true;
        this.setState({isEditing : newState});
    }

    handleKeyUp(e) {
        if (e.key === 'Enter' || e.key === 'Escape') {
            this.toggleEdit();
        }
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        if (this.state.isEditing) {
            return this.renderInput();
        }
        else {
            return this.renderDisplay();
        }
    }
}