import { useState } from 'react';
import { privateClient } from '../../clients/rickMortyClient';
import { RM_LOGIN_PATH } from '../../constants/api';
import { AuthInfo, useAuth } from './AuthProvider';

export type Credentials = {
  email: string;
  password: string;
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { saveAuthInfo } = useAuth();

  const login = async (credentials: Credentials) => {
    setLoading(true);

    try {
      const { data } = await privateClient.post<AuthInfo>(RM_LOGIN_PATH, credentials);
      saveAuthInfo(data);
    } catch (error) {
      // TODO: add error handling
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

// TODO: add logout functionality
const useLogout = () => {};

export { useLogin, useLogout };
