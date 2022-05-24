import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import Layout from './components/Layout/Layout';



const App = (props) => {
  // console.log(props);

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/"
            element={
              <Profile />
            }
          />
          <Route path="dialogs/*"
            element={
              <DialogsContainer />
            }
          />
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
          {/* <Route path="friends"
            element={
              // <Friends />
              <Friends state={props.state.friendsPage} />
            }
          /> */}
        </Route>
      </Routes>

    </div >
  )
}

export default App;