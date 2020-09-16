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

  checkHasTypes = () => {
    if (this.state.user.types.length > 0) {
      return true
    }
  }

  checkHasInsta = () => {
    if (this.state.user.insta_handle) {
      return true
    }
  }

  render() {
    console.log(this.state.user)
    if (!this.state.user) {
      console.log('no user logged in')
      return null
    } else {
      const isArtist = this.checkIsArtist()
      const coverImage = this.state.user.cover_image
      const hasTypes = this.checkHasTypes()
      const hasInsta = this.checkHasInsta()
      return (
        <section className="section page">
          <div className="box tile is-ancestor">
            <div className="tile is-vertical">
              <div className="profile-headers contianer tile is-vertical">
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
                <br></br>
                <br></br>
                <h1 className="profile-name">
                  {this.capitalizeFirstLetter(this.state.user.username)}
                </h1>
                <p>{this.capitalizeFirstLetter(this.state.user.bio)}</p>
                { hasTypes ?
                  <div className="tile">
                    {this.state.user.types.map((type) =>
                      <span key={type.id} className="favourite-link">
                        <div className="typeBubble">{type.name}</div>
                      </span>
                    )}
                  </div>
                  :
                  <>
                  </>
                }

                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={this.handleEditProfile} className="editIcon"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/>
                  </svg>
                  { hasInsta ?
                    <a href={this.state.user.insta_handle} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="editIcon"><path d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
                      </svg>
                    </a>
                    :
                    <>
                    </>

                  }

                </div>

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
