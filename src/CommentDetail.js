import React from 'react';
import { randAvatar, randFirstName } from '@ngneat/falso';

const CommentDetail = () => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={randAvatar()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {randFirstName()}
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
