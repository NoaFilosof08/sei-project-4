import React from 'react'
import { getAllProfiles } from '../../lib/api'
// import ArtistCard from '../Artist/ArtistCard'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from 'react-router-dom'

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
          <Carousel>
            {artists.map(profile =>(
              <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile" key={profile.id}>
                <Link to={`/artist/${profile.id}`}>
                  <img src={profile.cover_image} alt={profile.username} loading="lazy" width="255" height="255"/>
                  <p className="legend"><h4 className="card-header-title">{profile.username}</h4></p>


                  {/* <div className="card">
                    <div className="card-header">
                      <h4 className="card-header-title">{profile.username}</h4>
                    </div>
                    <div className="card-image">
                      <figure className="image image is-1by1">
                        <img src={profile.coverImage} alt={profile.username} loading="lazy" width="255" height="255"/>
                      </figure>
                    </div>
                    <div className="card-content">
                      <h5 className="">{profile.bio}</h5>
                    </div>
                  </div> */}
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    )
  }
}


export default Home
