import PropTypes from 'prop-types';
import { Friendens } from './Friends';
export const FriendList = ({ friends }) => {
  return (
    <section>
      <ul>
        {friends.map(friends => (
          <li key={friends.id}>
            <Friendens
              avatar={friends.avatar}
              name={friends.name}
              isOnline={friends.isOnline}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
