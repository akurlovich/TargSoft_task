import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action_creators/user';

const UserList: FC = () => {
  const {users, loading, error, posts} = useTypedSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    
  }, []);

  if (loading) {
    return <h1 style={{fontSize: '60px'}}>Loading...</h1>
  }
  if (error) {
    return <h1 style={{fontSize: '60px'}}>{error}</h1>
  }
  return (
    <div>
      {users.map(user => 
        <div key={user.id}>{user.name}</div>  
      )}
    </div>
  );
};

export default UserList;