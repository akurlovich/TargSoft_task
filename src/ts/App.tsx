import React, { FC, useEffect, useState } from 'react';
import FluentUI from './components/FluentUIList';
import UserList from './components/UserList';

const App: FC = () => {

  return (
    <div className='wrapper'>
      {/* <UserList/> */}
      <FluentUI/>
    </div>
  );
}

export default App;