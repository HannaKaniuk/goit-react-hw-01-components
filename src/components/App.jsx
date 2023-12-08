import { UserProfile } from 'components/UserProfile/UserPofile';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding:'100px',
        backgroundColor:'aliceblue',
        
      }}
    >
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

<StatisticsList title="Upload stats" stats={data} />

<FriendList friends={friends} />

<TransactionHistory transactions={transactions} />
    </div>
  );
};
