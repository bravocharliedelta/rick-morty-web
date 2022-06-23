import { useContext, createContext, useState, useMemo } from 'react';

export type AuthInfo = {
  userId?: string;
  expirationDate?: string;
};

type AuthContextValue = {
  authInfo: AuthInfo;
  setAuthInfo: (authInfo: AuthInfo) => void;
};

const EXPIRATION_COOKIE = 'expiresAt';
const USER_ID_COOKIE = 'userId';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const expirationDate = window.localStorage.getItem(EXPIRATION_COOKIE);
  const userId = window.localStorage.getItem(USER_ID_COOKIE);

  const [authInfo, setAuthInfo] = useState<AuthInfo>({
    ...(expirationDate && { expirationDate }),
    ...(userId && { userId }),
  });

  const value = useMemo(() => ({ authInfo, setAuthInfo }), [authInfo]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  const { authInfo, setAuthInfo } = context;

  const saveAuthInfo = ({ userId, expirationDate }: AuthInfo) => {
    setAuthInfo({ userId, expirationDate });
    if (expirationDate && userId) {
      window.localStorage.setItem(EXPIRATION_COOKIE, expirationDate);
      window.localStorage.setItem(USER_ID_COOKIE, userId);
    }
  };

  const isAuthenticated = () => {
    if (authInfo.expirationDate) {
      return new Date(authInfo.expirationDate) > new Date();
    }
    return false;
  };

  return { saveAuthInfo, isAuthenticated };
};

export { AuthProvider, useAuth };
