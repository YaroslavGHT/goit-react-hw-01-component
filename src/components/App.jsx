import { MarckupProfile } from './Profile/Profile.jsx';
import { MarckupStatistics } from './Statistics/Statistics.jsx';
import { MarckupFriendlist } from './FriendList/FriendList.jsx';
import {MarckupTransaction} from './TransactionHistory/TransactionHistory.jsx'
import user from './Profile/user.json';
import statData from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* React homework template */}
      <MarckupProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <MarckupStatistics title="Upload stats" stats={statData} />
      <MarckupFriendlist friends={friends} />
      <MarckupTransaction items={transactions} />;
    </div>
  );
};
