
import React from 'react'
import { getArtistProfile, getSingleProfile } from '../../lib/api'

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
      const userRes = await getSingleProfile()
      this.setState({ user: userRes.data })
      console.log(this.state.user)
      console.log(this.state)
    } catch (err) {
      console.log(err)
    }
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  handleEditProfile = () => {
    this.props.history.push('/profile/edit')
  }

  // async handleFavourite = () => {
  //   console.log('fave click')
  //   const favouritedArtist = this.state.artist
  //   console.log('faved:', favouritedArtist)
  //   const currentFaves = this.state.user.favourites
  //   const updatedFavourites = [ ...currentFaves, this.state.artist.id]
  //   console.log(updatedFavourites)
  //   try {
  //     await this.handleEditProfile(this.state.user.id, `favourites: ${updatedFavourites}`)
  //     console.log('sucess')
  //   } catch {
  //     console.log(err.Response.data)
  //   }
  // }

  render() {
    if (!this.state.artist) {
      console.log('no artist')
      return null
    } else {
      console.log(this.state.artist)
      return (
        <section className="section">
          <div className="container box">
            <div className="container profile-img">
              <figure className="image is-150x150">
                <img className="image is-rounded" src={this.state.artist.profile_image} alt="profile"/>
              </figure>
              <h1 className="profile-name">{this.capitalizeFirstLetter(this.state.artist.username)} </h1>
              <p>{this.capitalizeFirstLetter(this.state.artist.bio)}</p>
              <br></br>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={this.handleEditProfile} className="editIcon"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>
              <svg id="wish" width="34" height="34" viewBox="0 0 24 24" onClick={this.handleFavourite} className="ico"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" id="wish"></path></svg>
            </div>
            <div className="columns">
              <div className="column">
                <p className="title is-4">Art:</p>
                {this.state.artist.created_art.map((art) =>
                  <div key={art.id}>
                    <p >{art.name}</p>
                    <img className="image" src={art.image} alt={art.descripton}/>
                    <p >{art.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}


export default ArtistViewPage

