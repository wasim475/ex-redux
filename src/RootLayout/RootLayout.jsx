import { Outlet } from 'react-router';
import Counter from '../components/counter/Counter';
import Posts from '../components/Posts/Posts';
import Users from '../components/users/Users';


const RootLayout = () => {
  return (
    <div>
        <Outlet/>
      <Counter/>
      {/* <Posts/> */}
      <Users/>
    </div>
  );
};

export default RootLayout;
