import React from 'react';
import './page_body.scss'
import PageHeading from './page_heading'

// eslint-disable-next-line react/prefer-stateless-function
export default class AppBody extends React.Component {
    render() {
        return (
            <div className="body">
                <PageHeading />
            </div>
        );
    }
}