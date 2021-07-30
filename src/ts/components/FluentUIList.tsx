import { DetailsList, DetailsRow, IColumn, IDetailsFooterProps, IDetailsRowBaseProps, SelectionMode } from '@fluentui/react/lib/DetailsList';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IUser, UserActionType } from '../types/user';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { IStackTokens } from '@fluentui/react/lib/components/Stack/Stack.types';
import { Stack } from '@fluentui/react/lib/components/Stack';
import { DefaultButton } from '@fluentui/react/lib/components/Button';
import { PrimaryButton } from '@fluentui/react/lib/components/Button';

initializeIcons(undefined, { disableWarnings: true });

const FluentUI: FC = () => {
  let {users, loading, error, posts, page, limit} = useTypedSelector(state => state.post);
  const dispatch = useDispatch();
  const {fetchUsers, setPostsPage} = useActions();
  const [popup, setpopup] = useState(false);
  const [chooseItem, setchooseItem] = useState(NaN)

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

  const clickItem = async (value: number) => {

    setpopup(true);
    setchooseItem(value)
    
    // console.log(value)
    // posts.splice(item - 1, 1)
    // posts = posts.filter(item => item.id !== value)

    // console.log(posts);
    // dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: posts});

  }
  const stackTokens: IStackTokens = { childrenGap: 40 };
  const canselHandler = () => {
    setpopup(false);
  }
  const deleteHandler = () => {
    setpopup(false);
    posts = posts.filter(item => item.id !== chooseItem)

    console.log(posts);
    dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: posts});

  }
  return (
    <div>
       {popup && <div className='popup_container' style={{width: '300px', height: '300px', background: 'red', position: 'absolute', top: '0px', left: '0px', zIndex: 1000}}>
          <Stack horizontal tokens={stackTokens}>
            <DefaultButton text="Delete" onClick={deleteHandler} allowDisabledFocus />
            <PrimaryButton text="Cansel" onClick={canselHandler} allowDisabledFocus  />
          </Stack>
        </div>}
      <DetailsList
        selectionMode={SelectionMode.none}
        // disableSelectionZone={true}
        // selectionPreservedOnEmptyClick={true}
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