import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/Common/NavBar'
import Home from './components/Common/Home'
import NotFound from './components/Common/NotFound'
import Splash from './components/Common/Splash'
import ProfilePage from './components/Artist/ProfilePage'
import ArtistViewPage from './components/Artist/ArtistViewPage'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import EditProfile from './components/Auth/EditProfile'
import CreateArt from './components/Artist/CreateArt'
import EditArt from './components/Artist/EditArt'
import ArtShow from './components/Artist/ArtShow'


const App = () => (
  <BrowserRouter>
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/art/edit/:id" component={EditArt} />
        <Route path="/artist/:id" component={ArtistViewPage} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/createart" component={CreateArt} />
        <Route path="/art/:id" component={ArtShow}/>
        <Route path="/artist/:id" component={ArtistViewPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={NotFound} />

      </Switch>
    </main>
  </BrowserRouter>
)

export default App
