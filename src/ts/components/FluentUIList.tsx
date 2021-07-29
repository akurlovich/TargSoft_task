import { DetailsList, IColumn } from '@fluentui/react/lib/DetailsList';
import React, { useEffect } from 'react';
import { FC } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const FluentUI: FC = () => {
  const {users, loading, error, posts, page, limit} = useTypedSelector(state => state.post);
  // const dispatch = useDispatch();
  const {fetchUsers, setPostsPage} = useActions();

  useEffect(() => {
    fetchUsers();
  }, [page]);

  if (loading) {
    return <h1 style={{fontSize: '60px'}}>Loading...</h1>
  }
  if (error) {
    return <h1 style={{fontSize: '60px'}}>{error}</h1>
  }

  const arr = [
    {
      name: '1111',
      data: 123,
      last: 'wwww',
      email: 'rrrr',
    },
    {
      name: '2222',
      data: 2123,
      last: 'wwww2',
      email: 'rrrr2',
    },
    {
      name: '3333',
      data: 3123,
      last: 'wwww3',
      email: 'rrrr3',
    },
  ]

  const columns: IColumn[] = [
    {
      key: 'column1',
      name: 'File Type',
      fieldName: 'userId',
      minWidth: 16,
      maxWidth: 16,
      isResizable: true,
      isCollapsible: true,
    },
    {
      key: 'column2',
      name: 'File Type2',
      fieldName: 'id',
      minWidth: 16,
      maxWidth: 16,
    },
    {
      key: 'column3',
      name: 'File Type3',
      fieldName: 'title',
      minWidth: 16,
      maxWidth: 16,
    },
    {
      key: 'column4',
      name: 'File Type4',
      fieldName: 'body',
      minWidth: 16,
      maxWidth: 16,
    },
    // {
      // key: 'column5',
      // name: 'File Size',
      // fieldName: 'fileSizeRaw',
      // minWidth: 70,
      // maxWidth: 90,
      // isResizable: true,
      // isCollapsible: true,
      // data: 'number',
      // onColumnClick: this._onColumnClick,
      // onRender: (item: IDocument) => {
      //   return <span>{item.fileSize}</span>;
      // },
    // }
  ]

  return (
    <div>
      <DetailsList
        items={posts}
        // compact={isCompactMode}
        columns={columns}
        // selectionMode={SelectionMode.none}
        // getKey={this._getKey}
        // setKey="none"
        // layoutMode={DetailsListLayoutMode.justified}
        // isHeaderVisible={true}
        // onItemInvoked={this._onItemInvoked}
      />
      {/* {posts.map(user => 
        <div key={user.id}>{user.title}</div>  
      )} */}
    </div>
  );
};

export default FluentUI;