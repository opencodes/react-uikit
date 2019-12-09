import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './../../lib/components/Button/Button';

test('renders Button', () => {
    const { getByText } = render(<Button />);
    const linkElement = getByText(/Button/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders button props text', () => {
    const text = 'My Button';
    const { getByText } = render(<Button  buttonText={text}/>);
    const linkElement = getByText(/My Button/i);
    expect(linkElement).toBeInTheDocument();
});
