import { DetailsList, DetailsRow, IColumn, IDetailsFooterProps, IDetailsRowBaseProps } from '@fluentui/react/lib/DetailsList';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IUser, UserActionType } from '../types/user';

const FluentUI: FC = () => {
  const {users, loading, error, posts, page, limit} = useTypedSelector(state => state.post);
  const dispatch = useDispatch();
  const {fetchUsers, setPostsPage} = useActions();

  // const [newPosts, setnewPosts] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers();
    // setnewPosts(posts)
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
      fieldName: 'userId',
      minWidth: 160,
      maxWidth: 1600,
      isResizable: true,
      isCollapsible: true,
    },
    {
      key: 'column2',
      name: 'File Type2',
      fieldName: 'id',
      minWidth: 160,
      maxWidth: 1600,
    },
    {
      key: 'column3',
      name: 'File Type3',
      fieldName: 'title',
      minWidth: 160,
      maxWidth: 1600,
      isMultiline: true,
    },
    {
      key: 'column4',
      name: 'File Type4',
      fieldName: 'body',
      minWidth: 160,
      maxWidth: 1600,
      isMultiline: true,
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

  const _onRenderDetailsFooter = (detailsFooterProps: any) => {
    return (
      <DetailsRow
        {...detailsFooterProps}
        // columns={detailsFooterProps.columns}
        item={{}}
        itemIndex={-1}
        // groupNestingDepth={detailsFooterProps.groupNestingDepth}
        // selectionMode={SelectionMode.single}
        // selection={detailsFooterProps.selection}
        onRenderItemColumn={_renderDetailsFooterItemColumn}
        // onRenderCheck={_onRenderCheckForFooterRow}
      />
    );
  };

  const _renderDetailsFooterItemColumn: IDetailsRowBaseProps['onRenderItemColumn'] = (item, index, column) => {
    if (column) {
      return (
        <div>
          <b>{column.name}</b>
        </div>
      );
    }
    return undefined;
  };

  const clickItem = async (item: number) => {
    console.log(item)
    posts.splice(2, 5)
    console.log(posts);
    dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: posts});
    // const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${item}`);
    // console.log(response);
    // prompt('kdfjskfj')
  }
  
  return (
    <div>
      <DetailsList
        onActiveItemChanged={(index) => clickItem(index.id)}
        // onItemInvoked={(index) => clickItem(index.id)}
        
        items={posts}
        // compact={isCompactMode}
        columns={columns}
        onRenderDetailsFooter={_onRenderDetailsFooter}

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