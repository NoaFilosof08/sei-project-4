
import React from 'react'
import { getArtistProfile, getSingleUnpopulatedProfile, editProfile } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'
import {Link } from 'react-router-dom'

class ArtistViewPage extends React.Component {

  state = {
    artist: null,
    user: null
  }

  async componentDidMount() {
    const artistId = this.props.match.params.id
    try {
      const res = await getArtistProfile(artistId)
      this.setState({ artist: res.data })
      if (isAuthenticated()){
        const userRes = await getSingleUnpopulatedProfile()
        this.setState({ user: userRes.data })
      }
    } catch (err) {
      console.log(err)
    }
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  handleFavourite = async () => {
    const currentFaves = this.state.user.favourites
    const updatedFavourites = [ ...currentFaves, this.state.artist.id]
    const updatedUser = {...this.state.user, favourites : updatedFavourites }
    await this.setState({ user: updatedUser })
    const data = this.state.user
    try {
      await editProfile(data)
    } catch(err) {
      console.log(err.response.data)
    }
  }

  handleRemoveFavourite = async () => {
    const currentFaves = this.state.user.favourites
    const newFaves = currentFaves.filter( fave => {
      if  (!fave === this.state.artist.id) {
        return fave
      } else {
        return null
      }
    })
    const updatedUser = {...this.state.user, favourites : newFaves }
    await this.setState({ user: updatedUser })
    const data = this.state.user
    try {
      await editProfile(data)
    } catch(err) {
      console.log(err.response.data)
    }
  }

  checkFavourite = () => {
    if (isAuthenticated() && this.state.user) {
      const isFave = this.state.user.favourites.some( fave => {
        if (fave === this.state.artist.id){
          console.log('favourited')
          return true
        } else {
          return null
        }
      }
      )
      return isFave
    }
  }

  render() {
    if (!this.state.artist) {
      return null
    } else {
      const isLoggedIn = isAuthenticated()
      const favourited = this.checkFavourite()
      return (
        <section className="section">
          <div className="container box start">
            <div className="container">
              <div className="profile-headers">
                <figure className="image is-150x150">
                  <img className="image is-rounded" src={this.state.artist.profile_image} alt="profile"/>
                </figure>
                <h1 className="profile-name">{this.capitalizeFirstLetter(this.state.artist.username)} </h1>
                <p>{this.capitalizeFirstLetter(this.state.artist.bio)}</p>
                <br></br>
                { isLoggedIn ?
                  <div>
                    <svg id="wish" width="34" height="34" viewBox="0 0 24 24" onClick={favourited ? this.handleRemoveFavourite : this.handleFavourite} className={favourited ? "ico favourited" : "ico"}><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" id="wish"></path></svg>
                  </div>
                  :
                  <div></div>
                }
              </div>

            <div className="rows">
              <p className="title is-4">Art:</p>
              <div id="artWrapping">
                {this.state.artist.created_art.map((art) =>
                  <div key={art.id}>
                    <Link to={`/art/${art.id}`}>
                      <p >{art.name}</p>
                      <img className="image" src={art.image} alt={art.descripton}/>
                      <p >{art.description}</p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        </section>
      )
    }
  }
}


export default ArtistViewPage

