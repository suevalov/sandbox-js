'use strict';

import React from 'react';

export default React.createClass({

    displayName: 'NotFoundPage',

    render() {
        return (
            <div className='not-found-page-component'>
                <h1>Page Not Found</h1>

                <p>Sorry, but the page you were trying to view does not exist.</p>
            </div>
        );
    }

});
