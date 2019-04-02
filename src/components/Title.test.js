import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';

describe('Title', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Title/>, div);
    });
});