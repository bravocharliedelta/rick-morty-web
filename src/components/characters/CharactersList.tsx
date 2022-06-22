import CharacterCard from './CharacterCard';
import { useCharacters } from './characters';

function CharactersList() {
  const { characters } = useCharacters();

  return (
    <ul>
      {characters?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ul>
  );
}

export default CharactersList;
