import React from 'react'
import { createEnquiry, getSingleUnpopulatedProfile, getSingleArt } from '../../lib/api'
// import { Link } from 'react-router-dom'

class CreateArt extends React.Component {
  state = {
    data: {
      text: '',
      art: ''
    },
    user: [],
    artdetails: []
  }

  async componentDidMount() {
    const artId = this.props.match.params.artid
    const data = ({ ...this.state.data, art: artId })
    this.setState({ data })
    const userRes = await getSingleUnpopulatedProfile()
    this.setState({ user: userRes.data })
    const artdetails = await getSingleArt(artId)
    this.setState({ artdetails: artdetails.data })
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const artId = this.props.match.params.artid
    try {
      const res = await createEnquiry(this.state.data)
      this.setState({ data: res.data})
      this.props.history.push(`/art/${artId}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  render() {
    console.log(this.state)
    if (!this.state.artdetails) {
      return null
    }
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
            <figure className="media-left">
              <p className="image is-128x128">
                <img src={this.state.artdetails.image} alt="art preview"></img>
              </p>
            </figure>
            <br></br>
            <h2 className="title">Equiry:</h2>
            <p>Your <span id="logo" >Artly</span> Username:</p><div>{this.state.user.username}</div>
            <p>Your <span id="logo" >Artly</span> Email:</p><div>{this.state.user.email}</div>
            <br></br>
              <div className="field">
                <div className="control">
                  <textarea
                    name="text"
                    placeholder="Equiry text..."
                    onChange={this.handleChange}
                    value={this.state.data.text}
                    className="textarea is-fullwidth"
                  />
                </div>
              </div>
              <button type="submit" className="button" >Post</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default CreateArt
