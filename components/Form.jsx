import * as React from 'react';

export default function Form({ post, deletePost }) {
  return (
    <>
      <div>
        <bold>{post.id}</bold>
        <p>{post.title}</p>
        <button onClick={() => deletePost(post.id)}>delete</button>
      </div>
    </>
  );
}
