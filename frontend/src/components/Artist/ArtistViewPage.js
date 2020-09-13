
import React from 'react'
import { getArtistProfile } from '../../lib/api'

class ProfilePage extends React.Component {

  state = {
    artist: null
  }

  async componentDidMount() {
    const artistId = this.props.match.params.id
    try {
      const res = await getArtistProfile(artistId)
      console.log(res.data)
      this.setState({ artist: res.data })
      console.log(this.state.artist)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hello World</h1>
        </div>
      </div>
    </section>
    )
  }
}


export default ProfilePage

