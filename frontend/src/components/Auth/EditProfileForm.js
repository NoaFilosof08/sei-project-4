// import React from 'react'
// import Select from 'react-select'
// import ImageUpload from '../../lib/imageUpload'

// const EditProfileForm = ({ handleChange, handleCheckboxChange, handleSelectCategories, handleSubmit, data, options }) => {
//   return (
//     <>
//       <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">

//         <div className="field">
//           <label className="label">Username</label>
//           <div className="control has-icons-left">
//             <input
//               name="last_name"
//               onChange={handleChange}
//               value={data.username}
//             />
//           </div>
//         </div>

//         <div className="field">
//           <label className="label">bio</label>
//           <div className="control has-icons-left">
//             <input
//               placeholder="bio"
//               name="bio"
//               onChange={handleChange}
//               value={data.bio}
//             />
//           </div>
//         </div>

//         <div className="field">
//           <label className="label">Do you want to be able to upload art?</label>
//           <div className="control">
//             <input
//               type="checkbox"
//               name="is_artist"
//               onChange={handleCheckboxChange}
//               checked={data.is_artist}
//             />
//           </div>
//         </div>

//         <div className="field">
//           <label className="label">Profile Picture</label>
//           <div className="control">
//             <ImageUpload
//               labelText="Profile Picture"
//               onChange={handleImageChange}
//             />
//             <span></span>
//           </div>
//         </div>

//         <div className="field">
//           <label className="label">Pick what type of art you are interested in (please include all previous types)</label>
//           <div className="control">
//             <Select
//               options={options}
//               onChange={handleSelectCategories}
//               isMulti
//             />
//           </div>
//         </div>

//         <div className="field">
//           <button type="submit" className="button is-fullwidth is-warning"
//             onSubmit={handleSubmit} >Update Profile</button>
//         </div>
//       </form>
//     </>
//   )
// }

// export default EditProfileForm
