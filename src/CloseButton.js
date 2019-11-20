import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export class CloseButton extends React.Component {

    render() {
        <FontAwesomeIcon icon={faTimesCircle} onCLick={this.props.onClick}/>
    }
}