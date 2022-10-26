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
