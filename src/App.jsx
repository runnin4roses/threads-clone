import { useState, useEffect } from 'react';
import './index.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Feed from './components/Feed';
import Popup from './components/Popup';

const App = () => {
  const [user, setUser] = useState(null);
  const [threads, setThreads] = useState(null);
  const userId = "44d3dc3d-d7c8-4207-bcff-f58df362a641";

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users?user_uuid=${userId}`);
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  const getThreads = async () => {
    try {
      const response = await fetch(`http://localhost:3000/threads?thread_from=${userId}`);
      const data = await response.json();
      setThreads(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUser();
    getThreads();
  }, [])

  console.log(threads);

  return (
    <>
      {user && (
        <div className="app">
          <Nav url={user.instagram_url} />
          <Header user={user} />
          <Feed />
          {/* <Popup /> */}
        </div>)
      }
    </>
  )
}

export default App
