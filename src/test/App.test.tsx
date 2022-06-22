import { render, screen } from '@testing-library/react';
import App from '../App';

/* 
  check mock folder to preview default, fetched, mocked data
*/

describe('App:', () => {
  it('renders characters cards list', async () => {
    const { container } = render(<App />);
    await screen.findAllByAltText(/rick sanchez/i);
    expect(container).toMatchSnapshot();
  });
});
