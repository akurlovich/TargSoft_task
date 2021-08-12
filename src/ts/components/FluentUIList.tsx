import { DetailsList, DetailsRow, IColumn, IDetailsRowBaseProps, SelectionMode } from '@fluentui/react/lib/DetailsList';
import React, { useEffect, useState } from 'react'; 
import { FC } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { useActions } from '../hooks/useActions'; 
import { useTypedSelector } from '../hooks/useTypedSelector'; 
import { IUser, UserActionType } from '../types/user'; 
import { initializeIcons } from '@fluentui/react/lib/Icons'; 
import { IStackTokens } from '@fluentui/react/lib/components/Stack/Stack.types'; 
import { DefaultButton } from '@fluentui/react/lib/components/Button'; 
import { PrimaryButton } from '@fluentui/react/lib/components/Button'; 
import { TextField } from '@fluentui/react/lib/components/TextField';

initializeIcons(undefined, { disableWarnings: true });

const FluentUI: FC = () => {
  let {users, loading, error, posts, page, limit} = useTypedSelector(state => state.post);
  const dispatch = useDispatch();
  const {fetchUsers, setPostsPage} = useActions();
  const [popup, setpopup] = useState(false);
  const [chooseItem, setchooseItem] = useState<IUser>({
    userName: '',
    userId: 1,
    id: 1,
    title: '',
    body: '',
  });
  const [postTitle, setPostTitle] = useState('');
  const [bodyTitle, setBodyTitle] = useState('');

  useEffect(() => {
    fetchUsers();
    console.log(posts);
  }, []);

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
        item={{}}
        itemIndex={-1}
        onRenderItemColumn={_renderDetailsFooterItemColumn}
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
    setchooseItem(value);
  }
  const stackTokens: IStackTokens = { childrenGap: 40 };
  const canselHandler = () => {
    setpopup(false);
  }
  const deleteHandler = () => {
    setpopup(false);
    posts = posts.filter(item => item.id !== chooseItem?.id)

    dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: posts});
  }
  const titleHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPostTitle(event.currentTarget.value)
  }
  const bodyHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBodyTitle(event.currentTarget.value)
  }
  const addPostHandler = () => {
    
    setpopup(false);
    const post: IUser = {id: (posts.length + 1), userId: chooseItem.userId, userName: chooseItem.userName, title: postTitle, body: bodyTitle}
    posts.splice((chooseItem.id - 1), 0, post)
    dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: posts});
    setBodyTitle('');
    setPostTitle('');
    
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
                <TextField onChange={titleHandler} value={postTitle} label="Post title" multiline rows={2}/>
                <TextField onChange={bodyHandler} value={bodyTitle} label="Post body" multiline rows={4}/>
                <PrimaryButton text="Add post" onClick={addPostHandler} allowDisabledFocus />
              </div>
            </div>
              <PrimaryButton text="Cansel" onClick={canselHandler} allowDisabledFocus />
          </div>
        </div>
        }
      <DetailsList
        className='list__item'
        selectionMode={SelectionMode.none}
        onActiveItemChanged={(index: IUser) => clickItem(index)}
        items={posts}
        columns={columns}
        onRenderDetailsFooter={_onRenderDetailsFooter}
      />
    </div>
  );
};

export default FluentUI;