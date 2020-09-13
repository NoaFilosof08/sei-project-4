import React from 'react'
// import ImageUpload from '../../lib/imageUpload'
import { registerUser } from '../../lib/apiAuth'
import { Link } from 'react-router-dom'

class Register extends React.Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      profilePicture: '',
      bio: '',
      type: [],
      favourites: []
    }
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      await registerUser(this.state.data)
      console.log(this.state.data)
    } catch (err) {
      console.log(err)
      console.log(this.state.data)
    }
  }

  handleImageChange = url => {
    const formData = { ...this.state.data, profilePicture: url }
    this.setState({ data: formData })
  }

  render(){
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Register pls </h1>
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left">
                    <input
                      // className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                      placeholder="Username"
                      name="username"
                      onChange={this.handleChange}
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
                    />

                  </div>
                  {/* {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>} */}
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input
                      // className={`input ${this.state.errors.password ? 'is-danger' : ''}`}
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                    />

                  </div>
                  {/* {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>} */}
                </div>
                <div className="field">
                  <label className="label">Password Confirmation</label>
                  <div className="control has-icons-left">
                    <input
                      // className={`input ${this.state.errors.passwordConfirmation ? 'is-danger' : ''}`}
                      type="password"
                      placeholder="Password Confirmation"
                      name="password_confirmation"
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>} */}
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
                </div>
                <div className="field">
                  <button type="submit" className="button is-fullwidth is-warning" onSubmit={this.handleSubmit}>Register Me</button>
                </div>
                <div className="column is-half is-offset-one-quarter">
                  <p className="has-text-centered">
                    <small>Already have an account?
                      <Link to="/login" className="form-link">Log In</Link>
                    </small>
                  </p>
                </div>
              </form>

          </div>
        </div>
      </section>
    )
  }
}

export default Register
