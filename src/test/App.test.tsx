import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { rest } from 'msw';
import { server } from '../mocks/server';
import { RM_API_BASE_URL, RM_CHARACTERS_PATH } from '../constants/api';
import App from '../App';

const login = async ({ email = 'rick.sanchez@pickle.org', password = 'ImPickleRick!' } = {}) => {
  await userEvent.type(screen.getByLabelText(/email address/i), email);
  await userEvent.type(screen.getByText(/password/i), password);
  await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
};

/* 
  check mock folder to preview default, fetched, mocked data
*/

describe('App:', () => {
  it('shows error message when fetching characters failed', async () => {
    server.use(
      // In this paticular test respond to the same request with a 404 response.
      rest.get(`${RM_API_BASE_URL}${RM_CHARACTERS_PATH}`, (req, res, ctx) => {
        return res(ctx.status(404), ctx.json({}));
      })
    );

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await login();

    // redirects to /character
    await screen.findByText('There was a problem loading characters, please try again');
  });

  it('shows all happy path steps', async () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await login();

    // redirects to /character
    await screen.findByText(/loading/i);
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
