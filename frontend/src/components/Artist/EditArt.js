import React from 'react'
import { editArt, getSingleArt } from '../../lib/api'
import ImageUpload from '../../lib/imageUpload'
import { popupNotification } from '../../lib/notification'

class EditArt extends React.Component {
  state = {
    data: {
      name: '',
      username: '',
      description: '',
      price: 0,
      image: ''
    },
    errors: {}
  }

  async componentDidMount() {
    const artID = this.props.match.params.id
    try {
      const res = await getSingleArt(artID)
      this.setState({ data: res.data })
    } catch (err) {
      this.props.history.push('/*')
    }
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const artId = this.props.match.params.id
    try {
      const res = await editArt(artId, this.state.data)
      this.setState({ data: res.data })
      popupNotification(`${this.state.data.name} successfully edited!`)
      this.props.history.push('/profile')
    } catch (err) {
      this.setState({ errors: err.response.data })
    }
  }

  handleImageChange = url => {
    const formData = { ...this.state.data, image: url }
    this.setState({ data: formData })
  }

  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body spacer">
          <div className="container">
            <h1 className="title">Edit Art info </h1>
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
              <div className="field">
                <label className="label">Name of Art</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.name ? 'is-danger' : ''}`}
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange}
                    value={this.state.data.name}
                  />
                </div>
              </div>
              {this.state.errors.name && <small className="help is-danger">Name of Art is required!</small>}
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.description ? 'is-danger' : ''}`}
                    name="description"
                    placeholder="description"
                    onChange={this.handleChange}
                    value={this.state.data.description}
                  />
                </div>
              </div>
              {this.state.errors.description && <small className="help is-danger">Description is required  is required!</small>}
              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  £
                  <input
                    className={`input ${this.state.errors.price ? 'is-danger' : ''}`}
                    type="number"
                    name="price"
                    placeholder="price"
                    onChange={this.handleChange}
                    value={this.state.data.price}
                  />
                </div>
              </div>
              {this.state.errors.price && <small className="help is-danger">price is required  is required!</small>}
              <div className="field">
                <label className="label">Your current image is: </label>
                <div className="control">
                  <img src={this.state.data.image} alt={this.state.data.name}></img>
                </div>
              </div>
              <div className="field">
                <label className="label">or upload a new image!</label>
                <div className="control">
                  <ImageUpload
                    labelText="Cover Picture"
                    onChange={this.handleImageChange}
                    value={this.state.data.image}
                  />
                  <span></span>
                </div>
              </div>
              <button type="submit" className="button formbtn is-fullwidth" onSubmit={this.handleSubmit}>Post</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default EditArt
