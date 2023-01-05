import Head from 'next/head'
import { SmileyWink } from 'phosphor-react';
import { useEffect, useState } from 'react';
import Albums from '../../../components/apistorage/Albums';
import Posts from '../../../components/apistorage/Posts';
import { rawCode } from '../../../components/apistorage/rawCode';
import Todos from '../../../components/apistorage/Todos';
import Footer from '../../../components/Footer'
import NavMenu from '../../../components/NavMenu'

export default function ApiStorageChallenge() {
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

    // Load data from local storage if it exists
    const localPosts = localStorage.getItem('@devtest:posts');
    if (localPosts) setPosts(JSON.parse(localPosts));

    const localAlbums = localStorage.getItem('@devtest:albums');
    if (localAlbums) setAlbums(JSON.parse(localAlbums));

    const localTodos = localStorage.getItem('@devtest:todos')
    if (localTodos) setTodos(JSON.parse(localTodos))

    // Sync data from API if it's not already in local storage
    if (!localPosts || !localAlbums || !localTodos) getData();

  }, []);

  return (
    <>
      <Head>
        <title>Api Storage Challenge</title>
        <meta name="description" content="API consumption with Local-storage Challenge for a Front-end Interview Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='bg-stone-50'>
        <NavMenu
          hasBG={true}
          challengeName="API Storage Challenge"
          rawCodeHeader="API Storage"
          challengeHeaderContent={
            <ul className='list-inside list-disc flex flex-col gap-1 marker:text-zinc-700'>
              <h4 className='font-medium text-xl'>Build an application using React that will synchronize the API Rest to the local storage when the application starts</h4>
              <h5 className='font-medium text-lg'>The App should contain the menus:</h5>
              <li>POSTS</li>
              <li>ALBUMS</li>
              <li>TO-DOs</li>

              <p>All the application should work with the initially synchronized local storage data.</p>
            </ul>
          }>
          {rawCode}
        </NavMenu>

        <header className='flex flex-col gap-6 justify-center items-center h-96 bg-gradient-to-tl from-stone-700 to-stone-600'>
          <h2 className='text-7xl font-extrabold py-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>Super Exciting Header Text Here</h2>
          <h3 className='text-2xl font-bold text-center text-orange-50 w-1/2'>Another Exciting Thing that is a little longer, but overall it usually just serves the purpose of hyping the thing even more.</h3>
          <div className='flex gap-4'>
            <button className='bg-orange-500 py-2 px-3 rounded-md text-stone-50 font-bold hover:bg-orange-50 hover:text-orange-600 hover:scale-95 duration-200 disabled:grayscale disabled:cursor-not-allowed' disabled={isActive === "posts"} onClick={() => setIsActive("posts")}>Posts</button>
            <button className='bg-orange-500 py-2 px-3 rounded-md text-stone-50 font-bold hover:bg-orange-50 hover:text-orange-600 hover:scale-95 duration-200 disabled:grayscale disabled:cursor-not-allowed' disabled={isActive === "albums"} onClick={() => setIsActive("albums")}>Albums</button>
            <button className='bg-orange-500 py-2 px-3 rounded-md text-stone-50 font-bold hover:bg-orange-50 hover:text-orange-600 hover:scale-95 duration-200 disabled:grayscale disabled:cursor-not-allowed' disabled={isActive === "todos"} onClick={() => setIsActive("todos")}>Todos</button>
          </div>

        </header>

        {!isActive && <span className='flex gap-2 min-h-[calc(100vh-26.5rem)] mt-10 justify-center items-center opacity-75'>Please, select an Item from our menu above... <SmileyWink size={32} weight="bold" /></span>}
        {isActive === "posts" && <Posts posts={posts} />}
        {isActive === "albums" && <Albums albums={albums} />}
        {isActive === "todos" && <Todos todos={todos} />}
      </main >

      <Footer authorName='a random company' />
    </>
  )
}
