import React from 'react';
import { Home } from './components/Home';
import { vkAPI } from './api/vk-api';
import { useWheelActions } from './contexts/wheel-context';

export const App = () => {
  const [id, setId] = React.useState(null);
  const { getUser, setUserInfo } = useWheelActions();

  React.useEffect(() => {
    async function fetchData() {
      const user = await vkAPI.getUserInfo();
      setId(user.id);
      setUserInfo(user);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, [id]);

  return (
    <div>
      <Home />
    </div>
  );
};
