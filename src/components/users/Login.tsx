import { Navigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { emailValidationRules } from '../../lib/validation';
import { useAuth } from './AuthProvider';
import { Form } from '../ui';
import { Credentials, useLogin } from './loginHelpers';

const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10rem 0 0 0;
`;

type LoginProps = {
  navigateTo: string;
};

function Login({ navigateTo }: LoginProps) {
  const { login, loading } = useLogin();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated()) {
    return <Navigate to={navigateTo} state={{ from: location }} replace />;
  }

  const handleSubmit = (credentials: Credentials) => {
    login(credentials);
  };

  return (
    <LoginContainer>
      <Form<Credentials> onSubmit={handleSubmit}>
        <Form.TextField<Credentials> id="email" type="email" rules={emailValidationRules}>
          Email address
        </Form.TextField>
        <Form.TextField<Credentials> id="password" type="password">
          Password
        </Form.TextField>
        <button disabled={loading} type="submit">
          {loading ? '...' : 'Sign in'}
        </button>
      </Form>
    </LoginContainer>
  );
}

export default Login;
