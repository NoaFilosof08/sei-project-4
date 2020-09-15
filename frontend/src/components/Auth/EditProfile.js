import React from 'react'
// import { Link } from 'react-router-dom'
import { editProfile, getSingleProfile } from '../../lib/api'
import EditProfileForm from './EditProfileForm'

class EditProfile extends React.Component {
  state = {
    data: {
      profilePicture: '',
      first_name: '',
      last_name: '',
      is_artist: false,
      bio: '',
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

  async componentDidMount() {
    const profileID = this.props.match.params
    try {
      const res = await getSingleProfile(profileID)
      this.setState({ data: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleCheckboxChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const data = { ...this.state.data, [e.target.name]: value }
    this.setState({ data: data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await editProfile(this.state.data)
      this.setState({ data: res.data })
      this.props.history.push('/profile')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  handleSelectCategories = selected => {
    const selectedCategories = selected ? selected.map(category => category.value) : []
    const data = { ...this.state.data, types: selectedCategories }
    this.setState({ data })
  }

  checkIsArtist = () => {
    if (this.state.data.is_artist) {
      return true
    }
  }


  render() {
    console.log(this.state.data)
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Register pls </h1>

            <EditProfileForm
              handleChange={this.handleChange}
              handleCheckboxChange={this.handleCheckboxChange}
              handleSelectCategories={this.handleSelectCategories}
              handleSubmit={this.handleSubmit}
              data={this.state.data}
              errors={this.state.errors}
              options={this.options}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default EditProfile

