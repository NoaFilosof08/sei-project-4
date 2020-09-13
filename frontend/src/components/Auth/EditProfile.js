import React from 'react'
import Select from 'react-select'
// import { Link } from 'react-router-dom'
import { editProfile, getSingleProfile} from '../../lib/api'

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
    { value: 1, label: 'Abstract Expressionism'},
    { value: 2, label: 'Art Noveau'},
    { value: 3, label: 'Avant-garde'},
    { value: 4, label: 'Baroque'},
    { value: 5, label: 'Classicism'},
    { value: 6, label: 'Conceptualism'},
    { value: 7, label: 'Constructivism'},
    { value: 8, label: 'Cubism'},
    { value: 9, label: 'Dadaism'},
    { value: 10, label: 'Expressionism'},
    { value: 11, label: 'Fauvism'},
    { value: 12, label: 'Futurism'},
    { value: 13, label: 'Impressionism'},
    { value: 14, label: 'istallation Art'},
    { value: 15, label: 'Land Art/Earth Art'},
    { value: 16, label: 'Minimalism'},
    { value: 17, label: 'Neo-Impressionalism'},
    { value: 18, label: 'Neo-Classicism'},
    { value: 19, label: 'Performance Art'},
    { value: 20, label: 'Pointillism'},
    { value: 21, label: 'Pop Art'},
    { value: 22, label: 'Post-Impressionism'},
    { value: 23, label: 'Rococo'},
    { value: 24, label: 'Surrealism'},
    { value: 25, label: 'Supermatism'}
  ]

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

  handleCheckboxChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const data = { ...this.state.data, [event.target.name]: value }
    this.setState({ data: data })
  }

  handleSubmit = async event => {
    event.preventDefault()
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
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">

                <div className="field">
                  <label className="label">First Name</label>
                  <div className="control has-icons-left">
                    <input
                      name="first_name"
                      onChange={this.handleChange}
                      value={this.state.data.first_name}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Last Name</label>
                  <div className="control has-icons-left">
                    <input
                      name="last_name"
                      onChange={this.handleChange}
                      value={this.state.data.last_name}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">bio</label>
                  <div className="control has-icons-left">
                    <input
                      placeholder="bio"
                      name="bio"
                      onChange={this.handleChange}
                      value={this.state.data.bio}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Do you want to be able to upload art?</label>

                    <div className="control">
                      <input
                        type="checkbox"
                        name="is_artist"
                        onChange={this.handleCheckboxChange}
                        checked={this.state.data.is_artist}
                      />
                    </div>

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
                    <label className="label">Pick what type of art you are interested in (please include all previous types)</label>
                    <div className="control">
                      <div className="control">
                      <Select
                      options={this.options}
                      onChange={this.handleSelectCategories}
                      isMulti
                      // value={this.state.data.types}
                      />
                    </div>
                  </div>
              </div>

                <div className="field">
                  <button type="submit" className="button is-fullwidth is-warning"
                  onSubmit={this.handleSubmit}
                  >Update Profile</button>
                </div>
                    </div>
              </form>

          </div>
        </div>
      </section>
    )
  }
}

export default EditProfile
