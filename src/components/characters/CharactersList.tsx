import styled from '@emotion/styled';
import CharacterCard from './CharacterCard';
import { useCharacters } from './characters';

// const CharactersContainer = section``;

const Cards = styled.ul(
  ({
    theme: {
      devices: { laptop, tablet },
    },
  }) => `
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  list-style: none;
  padding: 2rem 0;

  @media ${tablet} {
    grid-template-columns: repeat(auto-fill, minmax(calc(100% - 4rem), 1fr));
    grid-auto-rows: 20rem;
  }

  @media ${laptop} {
    grid-template-columns: repeat(auto-fill, minmax(calc(50% - 4rem), 1fr));
    grid-auto-rows: 20rem;
  }
`
);

function CharactersList() {
  const { characters, loading, error } = useCharacters();

  if (loading) {
    return <span>Loading...</span>;
    // TODO: Add a skeleton component
  }

  if (error && !characters) {
    // TODO: add auto error retries than display final error result
    return <span>There was a problem loading characters, please try again</span>;
  }

  return (
    <section>
      <Cards>
        {characters?.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </Cards>
    </section>
  );
}

export default CharactersList;
