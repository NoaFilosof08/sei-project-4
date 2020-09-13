import React from 'react'
// import ImageUpload from '../../lib/imageUpload'
import { registerUser } from '../../lib/apiAuth'
import { Link } from 'react-router-dom'
import Select from 'react-select'

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
    },
    errors: {}
  }

  options = [
    { value: 'Abstract Expressionism', label: 'Abstract Expressionism'},
    { value: 'Art Noveau', label: 'Art Noveau'},
    { value: 'Avant-garde', label: 'Avant-garde'},
    { value: 'Baroque', label: 'Baroque'},
    { value: 'Classicism', label: 'Classicism'},
    { value: 'Conceptualism', label: 'Conceptualism'},
    { value: 'Constructivism', label: 'Constructivism'},
    { value: 'Cubism', label: 'Cubism'},
    { value: 'Dadaism', label: 'Dadaism'},
    { value: 'Expressionism', label: 'Expressionism'},
    { value: 'Fauvism', label: 'Fauvism'},
    { value: 'Futurism', label: 'Futurism'},
    { value: 'Impressionism', label: 'Impressionism'},
    { value: 'istallation Art', label: 'istallation Art'},
    { value: 'Land Art/Earth Art', label: 'Land Art/Earth Art'},
    { value: 'Minimalism', label: 'Minimalism'},
    { value: 'Neo-Impressionalism', label: 'Neo-Impressionalism'},
    { value: 'Neo-Classicism', label: 'Neo-Classicism'},
    { value: 'Performance Art', label: 'Performance Art'},
    { value: 'Pointillism', label: 'Pointillism'},
    { value: 'Pop Art', label: 'Pop Art'},
    { value: 'Post-Impressionism', label: 'Post-Impressionism'},
    { value: 'Rococo', label: 'Rococo'},
    { value: 'Surrealism', label: 'Surrealism'},
    { value: 'Supermatism', label: 'Supermatism'}
  ]

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: ''}
    this.setState({ data, errors })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      await registerUser(this.state.data)
      this.props.history.push('/login')
    } catch (err) {
      this.setState({ errors: err.response.data })
    }
  }

  handleImageChange = url => {
    const formData = { ...this.state.data, profilePicture: url }
    this.setState({ data: formData })
  }

  handleSelectCategories = selected => {
    const selectedCategories = selected ? selected.map(category => category.value) : []
    const data = { ...this.state.data, type: selectedCategories }
    this.setState({ data })
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
                      className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                      placeholder="Username"
                      name="username"
                      onChange={this.handleChange}
                    />

                  </div>
                  {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      className={`input ${this.state.errors.email ? 'is-danger' : ''}`}
                      placeholder="Email"
                      name="email"
                      onChange={this.handleChange}
                    />

                  </div>
                  {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input
                      className={`input ${this.state.errors.password ? 'is-danger' : ''}`}
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                    />

                  </div>

                  {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}

                </div>
                <div className="field">
                  <label className="label">Password Confirmation</label>
                  <div className="control has-icons-left">
                    <input
                      className={`input ${this.state.errors.password_confirmation ? 'is-danger' : ''}`}
                      type="password"
                      placeholder="Password Confirmation"
                      name="password_confirmation"
                      onChange={this.handleChange}
                    />
                  </div>

                  {this.state.errors.password_confirmation && <small className="help is-danger">{this.state.errors.password_confirmation}</small>}

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

                  <div className="field">
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
                  </div>
              </div>
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
