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

  const columns: IColumn[] = [
    {
      key: 'column1',
      name: 'File Type',
      // className: classNames.fileIconCell,
      // iconClassName: classNames.fileIconHeaderIcon,
      ariaLabel: 'Column operations for File type, Press to sort on File type',
      // iconName: 'Page',
      // isIconOnly: true,
      fieldName: 'name',
      minWidth: 16,
      maxWidth: 16,
    },
    {
      key: 'column2',
      name: 'Name',
      fieldName: 'name',
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: 'Sorted A to Z',
      sortDescendingAriaLabel: 'Sorted Z to A',
      // onColumnClick: this._onColumnClick,
      data: 'string',
      isPadded: true,
    },
    {
      key: 'column3',
      name: 'Date Modified',
      fieldName: 'dateModifiedValue',
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      // onColumnClick: this._onColumnClick,
      data: 'number',
      // onRender: (item: IDocument) => {
      //   return <span>{item.dateModified}</span>;
      // },
      isPadded: true,
    },
    {
      key: 'column4',
      name: 'Modified By',
      fieldName: 'modifiedBy',
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      // onColumnClick: this._onColumnClick,
      // onRender: (item: IDocument) => {
      //   return <span>{item.modifiedBy}</span>;
      // },
      isPadded: true,
    },
    {
      key: 'column5',
      name: 'File Size',
      fieldName: 'fileSizeRaw',
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isCollapsible: true,
      data: 'number',
      // onColumnClick: this._onColumnClick,
      // onRender: (item: IDocument) => {
      //   return <span>{item.fileSize}</span>;
      // },
    }
  ]

  return (
    <div>
      {posts.map(user => 
        <DetailsList
          items={users}
          // compact={isCompactMode}
          columns={columns}
          // selectionMode={SelectionMode.none}
          // getKey={this._getKey}
          // setKey="none"
          // layoutMode={DetailsListLayoutMode.justified}
          // isHeaderVisible={true}
          // onItemInvoked={this._onItemInvoked}
        />
      )}
      {/* {posts.map(user => 
        <div key={user.id}>{user.title}</div>  
      )} */}
    </div>
  );
};

export default FluentUI;