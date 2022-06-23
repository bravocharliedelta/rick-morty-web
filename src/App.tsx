import { Routes, Route, Navigate } from 'react-router-dom';
import {
  CacheConfigProvider,
  CharactersList,
  AuthProvider,
  Login,
  Layout,
  RequireAuth,
  NotFound,
} from './components';

function App() {
  return (
    <AuthProvider>
      <CacheConfigProvider>
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
      </CacheConfigProvider>
    </AuthProvider>
  );
}

export default App;
