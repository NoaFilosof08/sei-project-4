import React from 'react'
import { Link } from 'react-router-dom'

const ProfileForm = ({ data, handleChange, handleSubmit, errors }) => {
  return (
    <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box form">
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className={`input ${errors ? 'is-danger' : ''}`}
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className={`input ${errors ? 'is-danger' : ''}`}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

        </div>
        {errors && <small className="help is-danger">Sorry, your credentials were incorrect</small>}
      </div>
      <button type="submit" className="button formbtn is-fullwidth" onSubmit={handleSubmit} disabled={!data.email || !data.password}>Login</button>
      <div className="column is-half is-offset-one-quarter">
        <p className="has-text-centered">
          <small>Dont have an account?
            <Link to="/register" className="form-link"> Sign Up</Link>
          </small>
        </p>
      </div>
    </form>
  )
}

export default ProfileForm
