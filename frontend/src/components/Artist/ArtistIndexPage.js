import React from 'react'
import { getAllProfiles } from '../../lib/api'
// import ArtistCard from '../Artist/ArtistCard'
import { Link } from 'react-router-dom'

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
              <Link to={`/artist/${profile.id}`} className="link">
                <img className="image art-image" src={profile.cover_image} alt={profile.username}/>
                <p>{profile.name}</p>
              </Link>
            </div>

            // <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            // <Link to={`/artist/${id}`}>
            //   <div className="card">
            //     <div className="card-header">
            //       <h4 className="card-header-title">{username}</h4>
            //     </div>
            //     <div className="card-image">
            //       <figure className="image image is-1by1">
            //         <img src={cover_image} alt={username} loading="lazy" width="255" height="255"/>
            //       </figure>
            //     </div>
            //     {/* <div className="card-content">
            //       <h5 className="">{bio}</h5>
            //     </div> */}
            //   </div>
            // </Link>
            // </div>
          ))}
        </div>
      </section>
    )
  }
}

export default ArtistIndexPage


