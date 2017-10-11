import React from 'react';
import Bundle from './bundle';

export default (bundle, props) => (
    <Bundle load={bundle}>
        {Component => <Component {...props}/>}
    </Bundle>
);
