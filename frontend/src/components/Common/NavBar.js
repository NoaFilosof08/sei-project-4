import React from 'react'
import { Link, withRouter } from 'react-router-dom'

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

  render() {
    const { navbarOpen } = this.state
    return (
      <nav className="navbar is-dark is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/home">
              <span role="img" aria-label="logo" className="logo-emoji">🎨</span>
              <h1 className="is-hidden-mobile">ARTLY</h1>
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
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(Navbar)
