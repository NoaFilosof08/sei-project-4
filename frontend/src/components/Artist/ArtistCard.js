import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({ username, cover_image, bio, id }) => (

  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/artist/${id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{username}</h4>
        </div>
        <div className="card-image">
          <figure className="image image is-1by1">
            <img src={cover_image} alt={username} loading="lazy" width="255" height="255"/>
          </figure>
        </div>
        <div className="card-content">
          <h5 className="">{bio}</h5>
        </div>
      </div>
    </Link>
  </div>
)

export default ProfileCard
