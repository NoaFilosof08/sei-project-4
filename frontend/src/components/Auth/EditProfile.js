import React from 'react'
// import Select from 'react-select'
// import { Link } from 'react-router-dom'
import { editProfile, getSingleProfile} from '../../lib/api'

class EditProfile extends React.Component {
  state = {
    data: {
      profilePicture: '',
      bio: '',
      type: [],
      favourites: []
    },
    errors: {}
  }

  async componentDidMount() {
    try {
      const res = await getSingleProfile()
      this.setState({ data: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    const data = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ data })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await editProfile(this.state.data)
      this.setState({ data: res.data })
    } catch (err) {
      console.log(err.response.data)
    }
  }

  render() {
    console.log(this.state.data)
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Register pls </h1>
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
                <div className="field">
                  <label className="label">bio</label>
                  <div className="control has-icons-left">
                    <input
                      // className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                      placeholder="bio"
                      name="bio"
                      onChange={this.handleChange}
                      value={this.state.data.bio}
                    />

                  </div>
                  {/* {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>} */}
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      // className={`input ${this.state.errors.email ? 'is-danger' : ''}`}
                      placeholder="Email"
                      name="email"
                      onChange={this.handleChange}
                      value={this.state.data.email}
                    />

                  </div>
                  {/* {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>} */}

                  {/* <div className="field">
                      <label className="label">Profile Picture</label>
                      <div className="control">
                        <ImageUpload
                          labelText="Profile Picture"
                          onChange={this.handleImageChange}
                        />
                        <span></span>
                      </div>
                    </div> */}

                  {/* <div className="field">
                    <label className="label">Pick what type of Art you are interested in</label>
                    <div className="control">
                      <div className="control">
                      <Select
                      options={this.options}
                      onChange={this.handleSelectCategories}
                      isMulti
                      placeholder="please select a type from the list"
                      />
                    </div>
                  </div> */}
              {/* </div> */}
                </div>
                <div className="field">
                  <button type="submit" className="button is-fullwidth is-warning"
                  onSubmit={this.handleSubmit}
                  >Update Profile</button>
                </div>

              </form>

          </div>
        </div>
      </section>
    )
  }
}

export default EditProfile
