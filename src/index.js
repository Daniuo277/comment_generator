import React from 'react';
import ReactDOM from 'react-dom/client';
import { randAvatar } from '@ngneat/falso';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={randAvatar()} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Sam
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:00PM</span>
            <div className='text'>Nice blog post!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

root.render(<App />);
