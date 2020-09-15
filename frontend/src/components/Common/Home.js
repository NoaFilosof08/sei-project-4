import React from 'react'
import { getAllProfiles } from '../../lib/api'
import ArtistCard from '../Artist/ArtistCard'

class Home extends React.Component {
  state = {
    profiles: []
  }

  async componentDidMount() {
    try {
      const res = await getAllProfiles()
      this.setState({ profiles: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  returnArtists() {
    const artists = this.state.profiles.filter(profile => {
      if (profile.is_artist) {
        return profile
      } else {
        return null
      }
    })
    return artists
  }

  render() {
    const artists = this.returnArtists()
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hello World</h1>
          </div>
        </div>
        <div className="columns is-mobile is-multiline">
          {artists.map(profile =>(
            <ArtistCard key={profile.id} {...profile}/>
          ))}
        </div>
      </section>
    )
  }
}


export default Home
