import { PropTypes } from 'prop-types';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <section>
      <img src={avatar} alt="" />
      <p>{username}</p>
      <p>{tag}@pmarica </p>
      <p> {location} </p>

      <ul>
        <li>
          <span> Followers </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
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
