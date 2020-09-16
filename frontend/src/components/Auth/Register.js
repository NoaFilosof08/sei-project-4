import React from 'react'
import { registerUser } from '../../lib/api'
import { Link } from 'react-router-dom'
import ProfileForm from './ProfileForm'

class Register extends React.Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      cover_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmef96QDCD064tHtbExDLQRckzU4Djoq3eiw&usqp=CAU',
      profile_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTOkHm3_mPQ5PPRvGtU6Si7FJg8DVDtZ47rw&usqp=CAU',
      bio: '',
      is_artist: false,
      types: [],
      favourites: []
    },
    errors: {}
  }

  options = [
    { value: 1, label: 'Abstract Expressionism' },
    { value: 2, label: 'Art Noveau' },
    { value: 3, label: 'Avant-garde' },
    { value: 4, label: 'Baroque' },
    { value: 5, label: 'Classicism' },
    { value: 6, label: 'Conceptualism' },
    { value: 7, label: 'Constructivism' },
    { value: 8, label: 'Cubism' },
    { value: 9, label: 'Dadaism' },
    { value: 10, label: 'Expressionism' },
    { value: 11, label: 'Fauvism' },
    { value: 12, label: 'Futurism' },
    { value: 13, label: 'Impressionism' },
    { value: 14, label: 'istallation Art' },
    { value: 15, label: 'Land Art/Earth Art' },
    { value: 16, label: 'Minimalism' },
    { value: 17, label: 'Neo-Impressionalism' },
    { value: 18, label: 'Neo-Classicism' },
    { value: 19, label: 'Performance Art' },
    { value: 20, label: 'Pointillism' },
    { value: 21, label: 'Pop Art' },
    { value: 22, label: 'Post-Impressionism' },
    { value: 23, label: 'Rococo' },
    { value: 24, label: 'Surrealism' },
    { value: 25, label: 'Supermatism' }
  ]

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleCheckboxChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const data = { ...this.state.data, [event.target.name]: value }
    this.setState({ data: data })
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
    const data = { ...this.state.data, types: selectedCategories }
    this.setState({ data })
  }

  render(){
    console.log(this.state.data)
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body background-img">
          <div className="container">
            <h1 className="formTitle">Sign Up!</h1>
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box form">

              <ProfileForm
                handleChange={this.handleChange}
                handleCheckboxChange={this.handleCheckboxChange}
                handleImageChange={this.handleImageChange}
                handleSelectCategories={this.handleSelectCategories}
                data={this.state.data}
                errors={this.state.errors}
                options={this.options}
                isLoggedIn={false}
              />

              <div className="field">
                <button type="submit" className="button is-fullwidth formbtn" onSubmit={this.handleSubmit}>Register Me</button>
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
