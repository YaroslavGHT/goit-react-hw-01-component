import { MarckupProfile } from './Profile/Profile.jsx';
import { MarckupStatistics } from './Statistics/Statistics.jsx';
import { MarckupFriendlist } from './FriendList/FriendList.jsx';
import {MarckupTransaction} from './TransactionHistory/TransactionHistory.jsx'
import user from '../data/user.json';
import statData from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';


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
      <MarckupStatistics stats={statData} />
      <MarckupFriendlist friends={friends} />
      <MarckupTransaction items={transactions} />;
    </div>
  );
};
