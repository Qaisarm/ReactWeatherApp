import React from 'react';
import ReactDOM from 'react-dom';
import PreviousYear from './PreviousYear';

describe('PreviousYear', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PreviousYear/>, div);
    });
});