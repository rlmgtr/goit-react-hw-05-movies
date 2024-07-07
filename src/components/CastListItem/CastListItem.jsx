import PropTypes from 'prop-types';
import css from './CastListItem.module.css';

export const CastListItem = ({ profilePath, originalName, name }) => {
  return (
    <>   
    
 
     <li className={css.castItem}>
      <img  className={css.castImage}
        width="200"
        height="300"
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/w300${profilePath}`
            : `https://fakeimg.pl/600x400?text=No+Image+Available`
        }
        alt={originalName}
      />
      <p className={css.castName}>{name}</p>
    </li>
    
 
    </>

  );
};

CastListItem.propTypes = {
  profilePath: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  originalName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
