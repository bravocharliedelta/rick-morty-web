import { ClientProvider, CharactersList } from './components';

function App() {
  return (
    <ClientProvider>
      <CharactersList />
    </ClientProvider>
  );
}

export default App;
