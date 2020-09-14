import React from 'react'
import { Link } from 'react-router-dom'

class Splash extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">

            <div className="splashTitle">
              <p>Welcome to  <span id="logo"><span role="img" aria-label="EMOJI-DESC">🎨</span> Artly</span></p>
            </div>

            <div className="columns">

              <div className="column auto">
              </div>

              <div className="column is-two-fifths is-link">
                <Link to="/home">
                  <div className="card splashCards box">
                    <div className="splashText">
                      <h3>Browse some Artists and their awesome art</h3>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="column auto">
              </div>

              <div className="column is-two-fifths is-link">
                <Link to="/login">
                  <div className="card splashCards box">
                    <div className="splashText">
                      <h3>I'm an Artist and want to post some art </h3>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="column auto">
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Splash
