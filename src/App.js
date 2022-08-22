import React from 'react';
import { Home } from './components/Home';
import { vkAPI } from './api/vk-api';

const App = () => {
  React.useEffect(() => {
    async function fetchData() {
      const user = await vkAPI.getUserInfo();
      console.log(user);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
