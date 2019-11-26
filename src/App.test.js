import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {Search, Button, Table} from './App';
import App from './App';

describe('App', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('snapshot', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
})

describe('Search', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search>Search</Search>, div)
  })
  test('snapshot', () => {
    const component = renderer.create(
      <Search>Search</Search>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})


describe('Button', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>More</Button>, div)
  })
  test('snapshot', () => {
    const component = renderer.create(
      <Button>More</Button>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})


describe('Table', () => {
  const props = {
    lists
  }
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>More</Button>, div)
  })
  test('snapshot', () => {
    const component = renderer.create(
      <Button>More</Button>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})