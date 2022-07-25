import React from 'react';
import ReactDOM from 'react-dom/client';
import { randAvatar, randLine } from '@ngneat/falso';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45PM'
          author_avatar={randAvatar()}
          comment_text={randLine({ lineCount: 1 })}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today at 2:00AM'
          author_avatar={randAvatar()}
          comment_text={randLine({ lineCount: 1 })}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Yesterday at 5:00PM'
          author_avatar={randAvatar()}
          comment_text={randLine({ lineCount: 1 })}
        />
      </ApprovalCard>
    </div>
  );
};

root.render(<App />);
