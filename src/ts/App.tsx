import React, { FC, useEffect, useState } from 'react';
import model, { IUser } from './model';

const App: FC = () => {

  const [getUsers, setUsers] = useState<IUser[]>([{userId: 1, id: 1, title: '111', body: '2222'}]);
  useEffect(() => {
    model.getAllUsers<IUser>().then(res => setUsers(res))
    
  }, [])
  
  return (
    <div className="wrapper">
      {getUsers.map((item, index) => {
        return <div key={item.id}>HI{item.body}</div>
      })}

    </div>
  );
}

export default App;