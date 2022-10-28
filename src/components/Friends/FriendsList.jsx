import PropTypes from 'prop-types';
import { Friendens } from './Friends';
import { FriendsList, FriendsCard } from './Friends.module';

export const FriendList = ({ friends }) => {
  return (
    <section>
      <FriendsList>
        {friends.map(friends => (
          <FriendsCard key={friends.id}>
            <Friendens
              avatar={friends.avatar}
              name={friends.name}
              isOnline={friends.isOnline}
            />
          </FriendsCard>
        ))}
      </FriendsList>
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
