// cSpell: disable
/* eslint-disable */
import React from 'react';
import './PurpleHoloTitledText.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class PurpleHoloTitledText extends React.Component {    
    render() {
        return (
            <span class="header-menu-button">{this.props.data}</span>
        );
    }
}
