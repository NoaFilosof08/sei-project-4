import React from 'react'
import { createArt } from '../../lib/api'
import ImageUpload from '../../lib/imageUpload'
// import { Link } from 'react-router-dom'

class CreateArt extends React.Component {
  state = {
    data: {
      name: '',
      description: '',
      price: 0,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTGQVF6FDMDDy6a9DM8u4cIQX69OxhGAP8Jw&usqp=CAU'
    }
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await createArt(this.state.data)
      this.setState({ data: res.data })
      this.props.history.push('/home')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  handleImageChange = url => {
    const formData = { ...this.state.data, image: url }
    this.setState({ data: formData })
  }

  render() {
    console.log(this.state.data)
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="formTitle">Add a Piece of Art</h1>

            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box form">
              <div className="field">
                <label className="label">Name of Art</label>
                <div className="control">
                  <input
                    className="input"
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange}
                    value={this.state.data.name}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input
                    className="input"
                    type="textarea"
                    name="description"
                    placeholder="description"
                    onChange={this.handleChange}
                    value={this.state.data.description}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  £
                  <input
                    className="input"
                    type="number"
                    name="price"
                    placeholder="price"
                    onChange={this.handleChange}
                    value={this.state.data.price}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Cover Picture</label>
                <div className="control">
                  <ImageUpload
                    labelText="Cover Picture"
                    onChange={this.handleImageChange}
                    value={this.state.data.cover_image}
                  />
                  <span></span>
                </div>
              </div>

              <button type="submit" className="button  is-fullwidth formbtn" onSubmit={this.handleSubmit}>Post</button>
            </form>

          </div>
        </div>
      </section>
    )
  }
}

export default CreateArt
