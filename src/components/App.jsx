import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendsList';
import { TransactionHistory } from './Transactions/TransactionHistory';

import css from './App.module.css';
import user from '../path/user.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';
import data from '../path/data.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
