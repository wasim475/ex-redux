import { Outlet } from 'react-router';
import Counter from '../components/counter/Counter';
import Posts from '../components/Posts/Posts';


const RootLayout = () => {
  return (
    <div>
        <Outlet/>
      <Counter/>
      <Posts/>
    </div>
  );
};

export default RootLayout;
