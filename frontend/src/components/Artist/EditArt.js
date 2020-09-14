import React from 'react'
import { editArt, getSingleArt } from '../../lib/api'

class EditArt extends React.Component {
  state = {
    data: {
      name: '',
      description: '',
      price: 0,
      image: ''
    }
  }

  async componentDidMount() {
    const artID = this.props.match.params
    try {
      const res = await getSingleArt(artID)
      this.setState({ data: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const artId = this.props.match.params.id
    try {
      const res = await editArt(artId, this.state.data)
      this.setState({ data: res.data })
      this.props.history.push('/home')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Edit Art info </h1>

            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
                <div className="field">
                  <label className="label">Name of Art</label>
                  <div className="control">
                    <input
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
                      type="number"
                      name="price"
                      placeholder="price"
                      onChange={this.handleChange}
                      value={this.state.data.price}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Image</label>
                  <div className="control">
                    <input
                      name="image"
                      placeholder="photo"
                      onChange={this.handleChange}
                      value={this.state.data.image}
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

export default EditArt
