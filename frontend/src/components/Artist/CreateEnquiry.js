import React from 'react'
import { createEnquiry, getSingleUnpopulatedProfile } from '../../lib/api'
// import { Link } from 'react-router-dom'

class CreateArt extends React.Component {
  state = {
    data: {
      text: '',
      art: ''
    },
    user: []
  }

  async componentDidMount() {
    const artId = this.props.match.params.artid
    const data = ({ ...this.state.data, art: artId })
    this.setState({ data })
    const userRes = await getSingleUnpopulatedProfile()
    this.setState({ user: userRes.data })
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
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <p>Your <span id="logo" >Artly</span> Username:</p><div>{this.state.user.username}</div>
            <p>Your <span id="logo" >Artly</span> Email:</p><div>{this.state.user.email}</div>
            <h2 className="title">Equiry:</h2>

            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
                <div className="field">
                  <label className="label">Text:</label>
                  <div className="control">
                    <input
                      name="text"
                      placeholder="text"
                      onChange={this.handleChange}
                      value={this.state.data.text}
                    />
                  </div>
                </div>
                <button type="submit" className="button is-warning is-fullwidth" onSubmit={this.handleSubmit}>Post</button>
              </form>

          </div>
        </div>
      </section>
    )
  }
}

export default CreateArt
