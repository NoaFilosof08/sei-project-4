import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isAuthenticated } from '../../lib/auth'

class Navbar extends React.Component {
  state = { navbarOpen: false }

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  handleLogout = () => {
    logout()
    // popupNotification('See you again soon!')
    this.props.history.push('/home')
  }

  render() {
    const { navbarOpen } = this.state
    return (
      <nav className="navbar navbarMain is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/home">
              <span role="img" aria-label="logo" className="logo-emoji">🎨 </span>
              <h2 className="is-hidden-mobile navbarText artly">ARTLY</h2>
            </Link>
            <span className={`navbar-burger ${navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
            {/* // LINKS */}
            <Link className="navbar-item navbarText" to="/home">Artists</Link>
            {!isAuthenticated() &&<Link className="navbar-item navbarText" to="/register">Sign up</Link>}
            {!isAuthenticated() &&<Link className="navbar-item navbarText" to="/login">Login</Link>}
            {isAuthenticated() &&<Link className="navbar-item navbarText" to="/profile">Profile</Link>}
            {isAuthenticated() && <span onClick={this.handleLogout} className="navbar-item logout navbarText">Logout</span>}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(Navbar)
