import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';
import './styles.scss'

const rootElemnt = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/avatar_url',
};

ReactDOM.render(
  <Comment 
    user={userInfo}
    text="Good job!"
    date={new Date('2019-01-01T11:32:19.566Z')}
  />,
  rootElemnt
)