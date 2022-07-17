import React from 'react';
import { ReactComponent as CloseIcon } from './close.svg';
import './page-not-found.page.css';

function PageNotFound() {
    return (
        <div className="PageNotFound">
            <div className='Grid Grid--withGutter Grid--fit Grid--alignMiddle u-flexJustifyCenter'>
                <div className="PageNotFound-icon">
                    <CloseIcon />
                </div>
                <div className="u-textLeft">
                    <h1>Page not found!</h1>
                    <span>Please come back later.</span>
                </div>
            </div>
        </div>
    );
} ;

export default PageNotFound;