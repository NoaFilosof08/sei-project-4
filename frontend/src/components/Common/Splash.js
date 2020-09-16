import React from 'react'
import { Link } from 'react-router-dom'

class Splash extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body background-img">
          <div className="container ">

            <div className="splashTitle">
              <p id="logo"><span role="img" aria-label="EMOJI-DESC"></span> ARTLY</p>
            </div>

            <div className="columns splashMain">

              <div className="column auto">
              </div>

              <div className="column is-one-fifth is-link">
                <Link to="/home">
                  <div className="splashCards box splashimg1">
                    <div className="splashText">
                      <h3 className="splashText">Browse</h3>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="column auto">
              </div>

              <div className="column is-one-fifth is-link">
                <Link to="/login">
                  <div className="splashCards box splashimg1">
                    <div className="splashText">
                      <h3 className="splashText">Post</h3>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="column auto">
              </div>

            </div>

            <div className="splashAbout">
              <div className="aboutTitle">
                <h3>A bit about Artly</h3>
              </div>
              <br></br>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam. Accumsan tortor posuere ac ut consequat semper. Nulla pharetra diam sit amet nisl. Vestibulum lectus mauris ultrices eros.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Splash
