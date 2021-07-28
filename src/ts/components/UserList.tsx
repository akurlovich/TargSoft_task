import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action_creators/user';

const UserList: FC = () => {
  const {users, loading, error, posts, page, limit} = useTypedSelector(state => state.post);
  // const dispatch = useDispatch();
  const {fetchUsers, setPostsPage} = useActions();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    fetchUsers(page, limit);
  }, [page]);

  if (loading) {
    return <h1 style={{fontSize: '60px'}}>Loading...</h1>
  }
  if (error) {
    return <h1 style={{fontSize: '60px'}}>{error}</h1>
  }
  return (
    <div>
      {posts.map(user => 
        <div key={user.id}>{user.title}</div>  
      )}
      <div style={{display: 'flex'}}>
        {pages.map((p, index) => 
          <div
            key={index}
            onClick={() => setPostsPage(p)}
            style={{border: p === page ? '2px solid green' : '1px solid grey', padding: 10, cursor: 'pointer'}}
          >
            {p}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;