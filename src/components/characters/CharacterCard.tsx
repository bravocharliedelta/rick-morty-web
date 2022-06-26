import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { CharacterBasicInfo } from './characters';

const Card = styled.article(
  ({
    theme: {
      colors: { bgSecondary, boxShadow },
      devices: { tablet },
    },
  }) => `
  background-color: ${bgSecondary};
  border-radius: 1rem;
  box-shadow: ${boxShadow};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media ${tablet} {
    flex-direction: row;
  }
`
);
const CardImage = styled.div(
  ({
    theme: {
      devices: { tablet },
    },
  }) => `
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }

  @media ${tablet} {
    img {
      height: 100%;
      width: auto;
    }
  }
`
);
const CardContent = styled.div`
  padding: 1rem;
`;

type CharacterCardProps = {
  character: CharacterBasicInfo;
};

function CharacterCard({
  character: { id, name, image, status, favorite, location, origin },
}: CharacterCardProps) {
  return (
    <Card>
      <CardImage>
        <img alt={name} src={image} />
      </CardImage>
      <CardContent>
        <h2>{name}</h2>
        <h4>{status}</h4>
        {favorite && <mark>{favorite}</mark>}
        <h3>Last known location:</h3>
        <p>{location}</p>
        <h3>First seen in:</h3>
        <p>{origin}</p>
        {/* TODO: add link button component */}
        <Link to={`/character/${id}`}>More info</Link>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
