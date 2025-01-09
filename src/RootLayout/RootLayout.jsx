import { Outlet } from 'react-router';
import Counter from '../components/counter/Counter';


const RootLayout = () => {
  return (
    <div>
        <Outlet/>
      <Counter/>
    </div>
  );
};

export default RootLayout;
