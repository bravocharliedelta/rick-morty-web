import { CharacterBasicInfo } from './characters';

type CharacterCardProps = {
  character: CharacterBasicInfo;
};

function CharacterCard({
  character: { id, name, image, status, favorite, location, origin },
}: CharacterCardProps) {
  return (
    <li>
      <article>
        <img alt={name} src={image} />
        <h2>{name}</h2>
        <h4>{status}</h4>
        <mark>{favorite}</mark>
        <h3>Last known location:</h3>
        <p>{location}</p>
        <h3>First seen in:</h3>
        <p>{origin}</p>
      </article>
      {/* TODO: add router link */}
      <a href={`/character/${id}`}>More info</a>
    </li>
  );
}

export default CharacterCard;
