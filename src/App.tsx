import { CacheConfigProvider, CharactersList, AuthProvider, Login } from './components';

function App() {
  // TODO:
  // add router and restrict paths
  return (
    <AuthProvider>
      <Login />
      <CacheConfigProvider>
        <CharactersList />
      </CacheConfigProvider>
    </AuthProvider>
  );
}

export default App;
