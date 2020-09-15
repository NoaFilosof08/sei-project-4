import React from 'react'
import Select from 'react-select'

const ProfileForm = ({ handleChange, handleCheckboxChange, handleImageChange, handleSelectCategories, data, errors, options }) => {
  return (
    <>
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left">
          <input
            className={`input ${errors.username ? 'is-danger' : ''}`}
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />

        </div>
        {errors.username && <small className="help is-danger">{errors.username}</small>}
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input
            className={`input ${errors.email ? 'is-danger' : ''}`}
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />

        </div>
        {errors.email && <small className="help is-danger">{errors.email}</small>}
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left">
          <input
            className={`input ${errors.password ? 'is-danger' : ''}`}
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />

        </div>

        {errors.password && <small className="help is-danger">{errors.password}</small>}

      </div>
      <div className="field">
        <label className="label">Password Confirmation</label>
        <div className="control has-icons-left">
          <input
            className={`input ${errors.password_confirmation ? 'is-danger' : ''}`}
            type="password"
            placeholder="Password Confirmation"
            name="password_confirmation"
            onChange={handleChange}
          />
        </div>

        {errors.password_confirmation && <small className="help is-danger">{errors.password_confirmation}</small>}

        {/* <div className="field">
            <label className="label">Profile Picture</label>
            <div className="control">
              <ImageUpload
                labelText="Profile Picture"
                onChange={this.handleImageChange}
              />
              <span></span>
            </div>
          </div> */}

        </div>

        <div className="field">
          <label className="label">Are you an artist?</label>
          <div className="control">
            <input
              type="checkbox"
              name="is_artist"
              onChange={handleCheckboxChange}
              checked={data.is_artist}
            />
          </div>

          <div className="field">
            <label className="label">Pick what type of Art you are interested in</label>
            <div className="control">
              <div className="control">
              <Select
              options={options}
              onChange={handleSelectCategories}
              isMulti
              placeholder="please select a type from the list"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileForm