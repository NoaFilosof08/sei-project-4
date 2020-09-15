import React from 'react'
import { getSingleProfile } from '../../lib/api'
import { Link } from 'react-router-dom'



class ProfilePage extends React.Component {

  state = {
    user: null
  }

  async componentDidMount() {
    try {
      const res = await getSingleProfile()
      this.setState({ user: res.data })
      console.log(this.state.user)
    } catch (err) {
      console.log(err)
    }
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  handleEditProfile = () => {
    this.props.history.push('/editprofile')
  }

  checkIsArtist = () => {
    if (this.state.user.is_artist) {
      return true
    }
  }

  handleAddArt = () => {
    this.props.history.push('/createart')
  }

  render() {
    if (!this.state.user) {
      console.log('no user logged in')
      return null
    } else {
      const isArtist = this.checkIsArtist()
      const coverImage = this.state.user.cover_image
      return (
        <section className="section page">
          <div className="box tile is-ancestor">
            <div className="tile is-vertical">
              <div className="profile-headers contianer tile is-vertical">
                {/* <div> */}
                <figure className="image">
                  <div className="cover-image">
                    <img className="image  " src={coverImage} alt="cover">
                    </img>
                  </div>
                </figure>
                <figure className="image">
                  <div className="profile-image">
                    <img className="image is-rounded" src={this.state.user.profile_image} alt="profile"/>
                  </div>
                </figure>
                {/* </div> */}
                <h1 className="profile-name">
                  {this.capitalizeFirstLetter(this.state.user.username)}
                </h1>
                <p>{this.capitalizeFirstLetter(this.state.user.bio)}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={this.handleEditProfile} className="editIcon"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/>
                </svg>
                <br></br>
              </div>
              <div className="tile is-parent is-vertical">
                {
                  isArtist ?
                    <>
                      <div id="artWrapping">
                        {this.state.user.created_art.map((art) =>
                          <div key={art.id} className="art-display box">
                            <Link to={`/art/${art.id}`} className="link">
                              <img className="image art-image" src={art.image} alt={art.descripton}/>
                              <p>{art.name}</p>
                              <p className="description">{art.description}</p>
                            </Link>
                          </div>
                        )}
                      </div>
                      <br></br>
                      <button className="button flex-end addArtBtn" onClick={this.handleAddArt} >Add Art</button>
                    </>
                    :
                    <div></div>
                }
              </div>
              <div>
                <br></br>
                <hr></hr>
                <div>
                  <h3>Your Favourite Artists:</h3>
                  <br></br>
                  <div className="tile">
                    {this.state.user.favourites.map( (fave) =>
                      <span key={fave.id} className="favourite-link">
                        <Link to={`/artist/${fave.id}/`}>
                          <button className="button faveArtBtn">{fave.username}</button>
                        </Link>
                      </span>
                    )}
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default ProfilePage
