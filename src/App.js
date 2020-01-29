import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import MainProduct from './components/MainProduct';
import UpdatesDetail from './components/MainSection/UpdatesDetail/UpdatesDetail';

const App = () => {

  const [isNotificationOpened, setNotificationOpened] = useState(false);

  return (
    <div className="App">
      <Header openNotifications={()=> setNotificationOpened(true)} />
      <MainSection />
      <MainProduct />
      {isNotificationOpened && <UpdatesDetail close={()=> setNotificationOpened(false)} />}
    </div>
  );
}

export default App;
