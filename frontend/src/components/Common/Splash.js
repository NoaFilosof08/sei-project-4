import React from 'react'
import { Link } from 'react-router-dom'

class Splash extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">

            {/* <div className="splashTitle">
              <h1>Welcome to Artly</h1>
            </div> */}
            <h1 className="ml9">
              <span className="text-wrapper">
                <span className="letters">Welcome to Artly</span>
              </span>
            </h1>

            <div class="columns">

              <div class="column auto is-danger">
              </div>

              <div class="column is-two-fifths is-link">
                <Link to="/home">
                  <div className="card splashCards">
                    <div className="splashText">
                      <h3>Browser some Artists and their awesome art</h3>
                    </div>
                  </div>
                </Link>
              </div>

              <div class="column auto is-danger">
              </div>

              <div class="column is-two-fifths is-link">
                <Link to="/login">
                  <div className="card splashCards">
                    <div className="splashText">
                      <h3>I'm an Artist and want to post some art </h3>
                    </div>
                  </div>
                </Link>
              </div>

              <div class="column auto is-danger">
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Splash
