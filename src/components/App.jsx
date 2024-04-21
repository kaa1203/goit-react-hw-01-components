import Profile from "./Profile/Profile";
import user from "../json/user.json";
import Statistics from "./Statistics/Statistics";
import data from "../json/data.json";
import FriendList from "./FriendList/FriendList";
import friends from "../json/friends.json";
import TransactionHistory from "./Transaction/TransactionHistory";
import transactions from "../json/transactions.json";

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 20 }}>React Homework 01 Components</h1>
      <>
        <h2 style={{ margin: 20 }}>Social Network Profile</h2>
        <Profile
          username={username}
          tag={tag} location={location}
          avatar={avatar}
          stats={stats}
        />
      </>

      <>
        <h2 style={{ margin: 20 }}>Statistic Section</h2>
        <Statistics title="Upload Stats" stats={data}/>
      </>

      <>
        <h2 style={{ margin: 20 }}>Friends List</h2>
        <FriendList friends={friends}/>
      </>
      <>
        <h2 style={{ margin: 20 }}>Transaction History</h2>
        <TransactionHistory items={transactions} />
      </>
    </div>
  );
};
