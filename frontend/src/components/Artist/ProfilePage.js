import React from 'react'
// import { getSingleProfile } from '../../lib/api'

class ProfilePage extends React.Component {

  state = {
    user: null
  }

  // async componentDidMount() {
  //   try {
  //     const res = await getSingleProfile()
  //     this.setState({ user: res.data })
  //     console.log(user)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hello World</h1>
        </div>
      </div>
    </section>
    )
  }
}


export default ProfilePage
