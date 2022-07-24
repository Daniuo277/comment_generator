import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

root.render(<App />);
