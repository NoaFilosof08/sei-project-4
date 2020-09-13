import React from 'react'
import { loginUser } from '../../lib/apiAuth'
import { setToken } from '../../lib/auth'
import { Link } from 'react-router-dom'

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

            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      className={`input ${this.state.error ? 'is-danger' : ''}`}
                      name="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />

                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input
                      className={`input ${this.state.error ? 'is-danger' : ''}`}
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />

                  </div>
                  {this.state.error && <small className="help is-danger">Sorry, your credentials were incorrect</small>}
                </div>
                <button type="submit" className="button is-warning is-fullwidth" onSubmit={this.handleSubmit} disabled={!this.state.data.email || !this.state.data.password}>Login</button>
                <div className="column is-half is-offset-one-quarter">
                  <p className="has-text-centered">
                    <small>Dont have an account?
                      <Link to="/register" className="form-link">Sign Up</Link>
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

export default Login
