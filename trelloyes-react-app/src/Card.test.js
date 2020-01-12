import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

// smoke test
// gets component (div), renders component and sees if the component is rendered okay.
it ('Card renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
})

// snapshot test
// reat test renderer library renders the component and creates a json of the component (creates a file) and checks that file with the rendered one
it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

