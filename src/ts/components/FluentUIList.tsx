import { DetailsList, DetailsRow, IColumn, IDetailsFooterProps,
IDetailsRowBaseProps, SelectionMode } from '@fluentui/react/lib/DetailsList';
import axios from 'axios'; import React, { useEffect, useState }
from 'react'; import { FC } from 'react'; import { useDispatch }
from 'react-redux'; import { useActions } from '../hooks/useActions'; import
{ useTypedSelector } from '../hooks/useTypedSelector'; import { IUser,
UserActionType } from '../types/user'; import { initializeIcons }
from '@fluentui/react/lib/Icons'; import { IStackTokens }
from '@fluentui/react/lib/components/Stack/Stack.types'; import { Stack }
from '@fluentui/react/lib/components/Stack'; import { DefaultButton }
from '@fluentui/react/lib/components/Button'; import { PrimaryButton }
from '@fluentui/react/lib/components/Button'; import { TextField }
from '@fluentui/react/lib/components/TextField';

initializeIcons(undefined, { disableWarnings: true });

const FluentUI: FC = () => {
  let {users, loading, error, posts, page, limit} = useTypedSelector(state => state.post);
  const dispatch = useDispatch();
  const {fetchUsers, setPostsPage} = useActions();
  const [popup, setpopup] = useState(false);
  const [chooseItem, setchooseItem] = useState<IUser>();

  // const [newPosts, setnewPosts] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers();
    console.log(posts);
  }, []);

  // if (loading) {
  //   return <h1 style={{fontSize: '60px'}}>Loading...</h1>
  // }
  if (error) {
    return <h1 style={{fontSize: '60px'}}>{error}</h1>
  }

  const columns: IColumn[] = [
    {
      key: 'column1',
      name: 'User',
      fieldName: 'userName',
      minWidth: 160,
      maxWidth: 160,
      isResizable: true,
      isCollapsible: true,
    },
    // {
    //   key: 'column2',
    //   name: 'File Type2',
    //   fieldName: 'id',
    //   minWidth: 160,
    //   maxWidth: 1600,
    // },
    {
      key: 'column3',
      name: 'Post title',
      fieldName: 'title',
      minWidth: 160,
      maxWidth: 400,
      isMultiline: true,
    },
    {
      key: 'column4',
      name: 'Post',
      fieldName: 'body',
      minWidth: 360,
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

  const clickItem = async (value: IUser) => {

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
    posts = posts.filter(item => item.id !== chooseItem?.id)

    console.log(posts);
    dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: posts});

  }
  return (
    <div className='container'>
      <h1 className="posts_title">User's posts</h1>
      <h2>For delete or add new post, click on post row.</h2>
        {loading && <h1 style={{fontSize: '60px'}}>Loading...</h1>}
        {popup && 
        <div className='popup__wrapper'>
          <div className='popup_container'>
            <h1>Make you choiсe for user {chooseItem?.userName}:</h1>
            <div className="popup_choice">
              <div className="delete_post">
                <h3>Confirm to delete post:</h3>
                <div>Post title: {chooseItem?.title}</div>
                <div className='post_body'>Post body: {chooseItem?.body}</div>
                <DefaultButton text="Delete" onClick={deleteHandler} allowDisabledFocus />
              </div>
              <div className="add_post">
                <h3>Add new post:</h3>
                <TextField label="Post title" multiline rows={2}/>
                <TextField label="Post body" multiline rows={4}/>
                <PrimaryButton text="Add post" onClick={canselHandler} allowDisabledFocus />
              </div>
            </div>
              <PrimaryButton text="Cansel" onClick={canselHandler} allowDisabledFocus />
          </div>
        </div>
        }
      <DetailsList
        className='list__item'
        selectionMode={SelectionMode.none}
        // disableSelectionZone={true}
        // selectionPreservedOnEmptyClick={true}
        onActiveItemChanged={(index: IUser) => clickItem(index)}
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