import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import store from './store';

// smoke test
// gets component (div), renders component and sees if the component is rendered okay.
it ('List renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
})

// snapshot test
// reat test renderer library renders the component and creates a json of the component (creates a file) and checks that file with the rendered one
it('renders the UI as expected', () => {
    const list = {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      }
    const tree = renderer
      .create(<List
        key={list.id}
        header={list.header}
        cards={list.cardsIds.map(cardId => {
            return cardId;
        })}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

