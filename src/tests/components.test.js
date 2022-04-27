import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

it('App renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('User clicks calculator in navbar', () => {
  const { container } = render(<App url="/" />);
  fireEvent.click(screen.getByText('Calculator'));
  expect(container.getElementsByClassName('calc-heading')[0]).toHaveTextContent('Let\'s do some math!');
});
