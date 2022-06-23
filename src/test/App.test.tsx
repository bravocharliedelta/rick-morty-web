import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';

/* 
  check mock folder to preview default, fetched, mocked data
*/

describe('App:', () => {
  it('Happy path', async () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // shows login page at start
    userEvent.type(screen.getByLabelText(/email address/i), 'rick.sanchez@pickle.org');
    userEvent.type(screen.getByLabelText(/password/i), 'rick.sanchez@pickle.org');
    userEvent.click(screen.getByRole('button'));

    // redirects to /character
    await screen.findAllByAltText(/rick sanchez/i);
    expect(container).toMatchSnapshot();
  });
});
