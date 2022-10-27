import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <section className={css.cardSection}>
      <img className={css.img} src={avatar} alt="foto players" />
      <p className={css.text}>{username}</p>
      <p className={css.text}>{tag}@pmarica </p>
      <p className={css.text}> {location} </p>

      <ul className={css.ul}>
        <li className={css.li}>
          <span className={css.span}> Followers </span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.li}>
          <span className={css.span}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.li}>
          <span className={css.span}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
