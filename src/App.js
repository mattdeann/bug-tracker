import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Views/Login/Login';
import BugsView from './Views/Pages/BugsView';
import SideBar from './Views/SideBar/SideBar';

function App() {
  const { auth } = useSelector(state => state);

  return (
    <BrowserRouter>
      {
        auth.loggedIn 
        ?
        <article className='home'>
          <SideBar />
          <BugsView />
        </article>
        :
        <Login />
      }
    </BrowserRouter>
  );
}

export default App;
