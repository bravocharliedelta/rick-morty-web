import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';

/* 
  check mock folder to preview default, fetched, mocked data
*/

describe('App:', () => {
  it('shows all happy path steps', async () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // shows login page at start
    await userEvent.type(screen.getByLabelText(/email address/i), 'rick.sanchez@pickle.org');
    await userEvent.type(screen.getByText(/password/i), 'ImPickleRick!');
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));

    // redirects to /character
    await screen.findByAltText(/rick sanchez/i);
    expect(container).toMatchSnapshot();
  });

  it('validates login credentials', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText(/email address/i);
    const passInput = screen.getByLabelText(/password/i);

    // submit empty form
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(screen.getAllByText(/field is required/i).length).toBe(2);

    await userEvent.type(emailInput, 'rick.sanchez');
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();

    await userEvent.type(emailInput, 'rick.sanchez@pickle.org');
    await userEvent.type(passInput, 'ImPickleRick!');
    expect(screen.queryAllByRole('alert').length).toBe(0);
  });
});
