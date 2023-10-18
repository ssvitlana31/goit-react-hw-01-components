import user from '../assets/user.json';
import data from '../assets/data.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
