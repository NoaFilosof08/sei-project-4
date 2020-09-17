
import React from 'react'
import { getArtistProfile, getSingleUnpopulatedProfile, editProfile } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'
import { Link } from 'react-router-dom'
import { popupNotification } from '../../lib/notification'

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
      this.props.history.push('/*')
    }
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  handleFavourite = async () => {
    try {
      const currentFaves = this.state.user.favourites
      const updatedFavourites = [ ...currentFaves, this.state.artist.id]
      const updatedUser = { ...this.state.user, favourites: updatedFavourites }
      await this.setState({ user: updatedUser })
      const data = this.state.user
      await editProfile(data)
    } catch (err) {
      popupNotification('Ooops! Something went wrong - refresh and try again!')
    }
  }

  checkIfArtist = () => {
    if (this.state.artist.is_artist) {
      return true
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
    const updatedUser = { ...this.state.user, favourites: newFaves }
    await this.setState({ user: updatedUser })
    const data = this.state.user
    try {
      await editProfile(data)
    } catch (err) {
      popupNotification('Ooops! Something went wrong - trefresh and try again!')
    }
  }

  checkFavourite = () => {
    if (isAuthenticated() && this.state.user) {
      const isFave = this.state.user.favourites.some( fave => {
        if (fave === this.state.artist.id){
          return true
        } else {
          return null
        }
      }
      )
      return isFave
    }
  }

  checkHasTypes = () => {
    if (this.state.artist.types.length > 0) {
      return true
    }
  }

  checkHasInsta = () => {
    if (this.state.artist.insta_handle) {
      return true
    }
  }

  render() {
    if (!this.state.artist) {
      return null
    } else {
      const isLoggedIn = isAuthenticated()
      const favourited = this.checkFavourite()
      const isArtist = this.checkIfArtist()
      const hasTypes = this.checkHasTypes()
      const hasInsta = this.checkHasInsta()
      return (
        <section className="section">
          <div className="box start">
            <div className="profile-headers container">
              <figure className="image">
                <div className="cover-image">
                  <img className="image  " src={this.state.artist.cover_image} alt="cover">
                  </img>
                </div>
              </figure>
              <figure className="image">
                <div className="profile-image">
                  <img className="image is-rounded" src={this.state.artist.profile_image} alt="profile"/>
                </div>
              </figure>
              <br></br>
              <br></br>
              <h1 className="profile-name">{this.capitalizeFirstLetter(this.state.artist.name)} </h1>
              <p>{this.capitalizeFirstLetter(this.state.artist.bio)}</p>
              { hasTypes ?
                <div className="tile">
                  {this.state.artist.types.map((type) =>
                    <span key={type.id} className="favourite-link">
                      <div className="typeBubble">{type.name}</div>
                    </span>
                  )}
                  <br></br>
                </div>
                :
                <>
                </>
              }
              { isLoggedIn && isArtist ?
                <div>
                  <svg id="wish" width="34" height="34" viewBox="0 0 24 24" onClick={favourited ? this.handleRemoveFavourite : this.handleFavourite} className={favourited ? 'ico favourited' : 'ico'}><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" id="wish"></path></svg>
                  <a href={this.state.artist.insta_handle} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="instaIcon"><path d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
                    </svg>
                  </a>
                </div>
                :
                <div>
                  { hasInsta ?
                    <a href={this.state.artist.insta_handle} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="editIcon"><path d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
                      </svg>
                    </a>
                    :
                    <>
                    </>
                  }
                </div>
              }
            </div>
            <br></br>
            <div id="artWrapping">
              {this.state.artist.created_art.map((art) =>
                <div key={art.id} className="art-display box">
                  <Link to={`/art/${art.id}`}>
                    <img className="image art-image" src={art.image} alt={art.descripton}/>
                    <p >{art.name}</p>
                    <p className="description">{art.description}</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      )
    }
  }
}

export default ArtistViewPage

