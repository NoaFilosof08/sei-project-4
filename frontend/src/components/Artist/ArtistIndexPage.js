import React from 'react'
import { getAllProfiles } from '../../lib/api'
import ArtistCard from '../Artist/ArtistCard'

class ArtistIndexPage extends React.Component {
  state = {
    profiles: []
  }

  async componentDidMount() {
    try {
      const res = await getAllProfiles()
      console.log(res.data)
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
            <hr></hr>
            <h3>Browse Artists</h3>
            <h6>Check out all of our awesome artists below, be sure to click through to see their work</h6>
          </div>
        </div>
        <div id="artWrapping">
          {artists.map(profile => (
            <div key={profile.id} className="art-display box">
              <ArtistCard
                key={profile.id} {...profile}
              />
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default ArtistIndexPage


