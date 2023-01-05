export const rawCode = `import { useEffect, useState } from 'react';

function Albums({ albums }) {
  return (
    <article>
      <h4>Albums</h4>
      {albums?.map(album => <div key={album.id}><span>{album.id}: </span>{album.title}</div>)}
    </article>
  )}

function Todos({ todos }) {
  return (
    <article>
      <h4>Todos</h4>
      {todos?.map(todo => <div key={todo.id}><span>{todo.id}: </span>{todo.title}</div>)}
    </article>
  )}

function Posts({ posts }) {
  return (
    <article>
      <h4>Posts</h4>
      {posts?.map(post => <div key={post.id}><span>{post.id}: </span>{post.title}</div>)}
    </article>
  )}

function ApiStorageChallenge() {
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);
  const [isActive, setIsActive] = useState("")

  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
          setPosts(data);
          localStorage.setItem('@devtest:posts', JSON.stringify(data));
        });
      fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => {
          setAlbums(data);
          localStorage.setItem('@devtest:albums', JSON.stringify(data));
        });
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
          setTodos(data);
          localStorage.setItem('@devtest:todos', JSON.stringify(data));
        });
    };

    const localPosts = localStorage.getItem('@devtest:posts');
    if (localPosts) setPosts(JSON.parse(localPosts));

    const localAlbums = localStorage.getItem('@devtest:albums');
    if (localAlbums) setAlbums(JSON.parse(localAlbums));

    const localTodos = localStorage.getItem('@devtest:todos')
    if (localTodos) setTodos(JSON.parse(localTodos))

    if (!localPosts || !localAlbums || !localTodos) getData();

  }, []);

  return (
    <main>
        <header>
          <h2>Super Exciting Header Text Here</h2>
          <h3>Another Exciting Thing that is a little longer, but overall it usually just serves the purpose of hyping the thing even more.</h3>
          <div>
            <button disabled={isActive === "posts"} onClick={() => setIsActive("posts")}>Posts</button>
            <button disabled={isActive === "albums"} onClick={() => setIsActive("albums")}>Albums</button>
            <button disabled={isActive === "todos"} onClick={() => setIsActive("todos")}>Todos</button>
          </div>
        </header>

        {!isActive && <span>Please, select an Item from our menu above...</span>}
        {isActive === "posts" && <Posts posts={posts} />}
        {isActive === "albums" && <Albums albums={albums} />}
        {isActive === "todos" && <Todos todos={todos} />}
    </main >
  )
}
`