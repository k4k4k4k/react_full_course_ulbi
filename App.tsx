import * as React from 'react';
import './style.css';
import { useRef, useState } from 'react';
import Form from './components/Form';
import PostAdder from './components/PostAdder';
import Select from './components/Select';
import Input from './components/Input';

export default function App() {
  const inputRef = useRef();
  const [posts, setPosts] = useState([
    { id: 1, title: 'make business', amount: 2, hours: 1 },
    { id: 2, title: 'learn to play the piano', amount: 1, hours: 100 },
    { id: 3, title: 'drink coffee', amount: 2, hours: 0.5 },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  interface NewPost {
    id: number;
    title: string;
    amount: number;
    hours: number;
  }
  const [newPost, setNewPost] = useState<NewPost>({
    id: 0,
    title: '',
    amount: 0,
    hours: 0,
  });
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort] - b[sort]));
  };

  return (
    <div>
      <Select
        options={[
          // { title: 'fun todo', value: 'fun' },
          // { title: 'new todo', value: 'new' },
          // { title: 'boring todo', value: 'boring' },
          { title: 'по названию', value: 'title' },
          { title: 'по количеству', value: 'amount' },
        ]}
        defaultValue={'sort'}
        sortPosts={sortPosts}
        value={selectedSort}
      />
      <Input />
      {/* <PostAdder
        setNewPost={setNewPost}
        newPost={newPost}
        setPosts={setPosts}
        posts={posts}
      /> */}
      {/* <input ref={inputRef} onClick={() => console.log(inputRef?.current)} */}
      {posts.length ? (
        posts.map((post) => (
          <Form key={post.id} post={post} deletePost={deletePost} />
        ))
      ) : (
        <p>дел нет - наслаждайся книжками:)</p>
      )}
    </div>
  );
}
