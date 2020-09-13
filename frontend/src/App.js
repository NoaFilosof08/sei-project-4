import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/Common/NavBar'
import Home from './components/Common/Home'
import NotFound from './components/Common/NotFound'
import Splash from './components/Common/Splash'
import ProfilePage from './components/Artist/ProfilePage'
import ArtistViewPage from './components/Artist/ArtistViewPage'

const App = () => (
  <BrowserRouter>
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/artist/:id" component={ArtistViewPage} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
)

export default App
