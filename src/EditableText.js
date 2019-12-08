import React from 'react';

export class EditableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            text: this.props.text
        }
        this.renderInput = this.renderInput.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    renderInput() {
        return(
            <div onDoubleClick={this.toggleEdit}>
                <input
                type="text"
                value={this.state.text}
                onChange={this.handleInputChange}
                onKeyUp={this.handleKeyUp}
                onBlur={this.toggleEdit}
                />
            </div>
        );
    }

    renderDisplay() {
        return (
            <div onDoubleClick={this.toggleEdit}>
                {this.state.text}
            </div>
        )
    }

    handleInputChange(e) {
        this.setState({text: e.target.value})
    }

    handleKeyUp(e) {
        if (e.key === 'Enter' || e.key === 'Escape') {
            this.toggleEdit();
        }
    }

    toggleEdit() {
        var newState = this.state.isEditing ? false : true;
        this.setState({isEditing : newState});
    }

    render() {
        console.log("Rendering");
        console.log("isEditing: " + this.state.isEditing);
        if (this.state.isEditing) {
            return this.renderInput();
        }
        else {
            return this.renderDisplay();
        }
    }
}