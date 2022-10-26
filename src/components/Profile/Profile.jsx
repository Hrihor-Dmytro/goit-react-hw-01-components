import PropTypes from 'prop-types';
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

// export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};

{
  /* <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div> */
  //   <ul class="stats">
  //     <li>
  //       <span class="label">Followers</span>
  //       <span class="quantity">1000</span>
  //     </li>
  //     <li>
  //       <span class="label">Views</span>
  //       <span class="quantity">2000</span>
  //     </li>
  //     <li>
  //       <span class="label">Likes</span>
  //       <span class="quantity">3000</span>
  //     </li>
  //   </ul>;
}
