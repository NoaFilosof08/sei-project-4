import React from 'react'
import { Link } from 'react-router-dom'

class Splash extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body background-img">
          <div className="container ">

            <div className="splashTitle">
              <p id="logo">ARTLY</p>
            </div>
            <div className="columns splashMain is-centered ">
              <div className="column is-2 is-link">
                <Link to="/home">
                  <div className="splashCards box splashimg1">
                    <h3 className="splashText Button">Browse</h3>
                  </div>
                </Link>
              </div>
              <div className="column is-2 is-link">
                <Link to="/login">
                  <div className="splashCards box splashimg1">
                    <h3 className="splashText Button">Post</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="splashAbout">
              <div className="aboutTitle">
                <h3>A bit about Artly</h3>
              </div>
              <br></br>
              <div>
                <p>Artly has been curated as a platform to uplift and support small female and non-binary artists. Artly puts art lovers together in one place to share art, support and love. But most importantly, allows you to buy and sell art all in one place! You don’t have to be an artist to take part, just make sure to sign up which will allow you to get in touch with our Artists. If you’re an Artist, make sure to register in order unlock some awesome features of our app such as upload and edit your artwork, links to your socials, and view enquiries on your Art. We hope you love Artly as much as we do.
                  <br></br>
                — E and N x</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Splash
