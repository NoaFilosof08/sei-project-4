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
            <hr></hr>
            <h3>Browse Artists:</h3>
          </div>
        </div>
        <div className="columns is-center">
          <div className="slider-container column is-10 is-offset-1">
            <Carousel className="carousel-style" showThumbs={false}>
              {artists.map(profile =>(
                <div className="" key={profile.id}>
                  <Link to={`/artist/${profile.id}`}>
                    <div className=".slider-item-div">
                      <img className="carosel-pic" src={profile.cover_image} alt={profile.username}/>
                    </div>
                    <div className="legend"><h2>{profile.username}</h2><h4>{profile.bio}</h4></div>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    )
  }
}


export default Home
