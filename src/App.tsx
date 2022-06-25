import { Routes, Route, Navigate } from 'react-router-dom';
import {
  CacheConfigProvider,
  CharactersList,
  AuthProvider,
  Login,
  Layout,
  RequireAuth,
  NotFound,
  StylesProvider,
} from './components';

function App() {
  return (
    <AuthProvider>
      <CacheConfigProvider>
        <StylesProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="login" element={<Login />} />
              <Route element={<RequireAuth />}>
                <Route path="characters" element={<CharactersList />} />
              </Route>
              <Route path="" element={<Navigate to="/login" replace />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </StylesProvider>
      </CacheConfigProvider>
    </AuthProvider>
  );
}

export default App;
