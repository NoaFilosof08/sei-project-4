import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/Common/NavBar'
import Home from './components/Common/Home'
import NotFound from './components/Common/NotFound'
import Splash from './components/Common/Splash'
<<<<<<< HEAD
import ProfilePage from './components/Artist/ProfilePage'
import ArtistViewPage from './components/Artist/ArtistViewPage'
=======
import Register from './components/Auth/Register'
>>>>>>> ff6d869971edfd6bcfcf3f0fd58ff63328265a1e

const App = () => (
  <BrowserRouter>
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/home" component={Home} />
<<<<<<< HEAD
        <Route path="/profile" component={ProfilePage} />
        <Route path="/artist/:id" component={ArtistViewPage} />
=======
        <Route path="/register" component={Register} />
>>>>>>> ff6d869971edfd6bcfcf3f0fd58ff63328265a1e
        <Route path="/*" component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
)

export default App
