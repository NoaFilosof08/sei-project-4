import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notifications from 'react-notify-toast'

import NavBar from './components/common/NavBar'
import Home from './components/common/Home'
import NotFound from './components/common/NotFound'
import Splash from './components/common/Splash'
import ProfilePage from './components/artist/ProfilePage'
import ArtistViewPage from './components/artist/ArtistViewPage'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import EditProfile from './components/auth/EditProfile'
import CreateArt from './components/artist/CreateArt'
import EditArt from './components/artist/EditArt'
import ArtShow from './components/artist/ArtShow'
import CreateEnquiry from './components/artist/CreateEnquiry'
import Footer from './components/common/Footer'
import ArtistIndexPage from './components/artist/ArtistIndexPage'

const App = () => (
  <BrowserRouter>
    <main>
      <NavBar />
      <Notifications />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/art/edit/:id" component={EditArt} />
        <Route path="/artist/:id" component={ArtistViewPage} />
        <Route path="/home" component={Home} />
        <Route path="/artists" component={ArtistIndexPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/createart" component={CreateArt} />
        <Route path="/art/:id" component={ArtShow}/>
        <Route path="/artist/:id" component={ArtistViewPage} />
        <Route path="/enquire/:artid" component={CreateEnquiry} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={NotFound} />
      </Switch>
      <Footer />
    </main>
  </BrowserRouter>
)

export default App
