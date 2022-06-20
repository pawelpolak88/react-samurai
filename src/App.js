import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Friends from './components/Friends/Friends';
import Layout from './components/Layout/Layout';



const App = (props) => {
  // console.log(props);

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path="dialogs/*"
            element={
              <DialogsContainer />
            }
          />
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<UsersContainer />} />
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