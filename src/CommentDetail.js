import React from 'react';
import { randAvatar } from '@ngneat/falso';

const CommentDetail = (props) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={randAvatar()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>Today at 6:00PM</span>
          <div className='text'>Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
