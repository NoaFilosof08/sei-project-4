import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
// import { Link } from 'react-router-dom'
import LoginFrom from './LoginForm'

class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    error: false
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: false })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await loginUser(this.state.data)
      setToken(res.data.token)
      this.props.history.push('/home')
    } catch (err) {
      this.setState({ error: true })
    }
  }

  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Login Pls</h1>

            <LoginFrom
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              errors={this.state.error}
              data={this.state.data}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Login
