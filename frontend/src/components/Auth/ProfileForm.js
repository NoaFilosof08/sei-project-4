import React from 'react'
import Select from 'react-select'
import ImageUpload from '../../lib/imageUpload'

const ProfileForm = ({ handleChange, handleCheckboxChange,  handleSelectCategories, handleImageChange, data, errors, options }) => {
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

        <div className="field">
          <label className="label">Profile Picture</label>
          <div className="control">
            <ImageUpload
              labelText="Profile Picture"
              onChange={handleImageChange}
            />
            <span></span>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Bio</label>
        <div className="control has-icons-left">
          <input
            className={`input ${errors.bio ? 'is-danger' : ''}`}
            placeholder="About you..."
            name="bio"
            onChange={handleChange}
          />
        </div>
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
          <label className="label">What type of Art you are interested in or what type of Art do you make?</label>
          <div className="control">
            <div className="control">
              <Select
                options={options}
                onChange={handleSelectCategories}
                isMulti
                placeholder="Please select types from the list"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileForm
