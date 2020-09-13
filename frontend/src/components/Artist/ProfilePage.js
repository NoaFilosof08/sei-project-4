// import React from 'react'
// // import { getSingleProfile } from '../../lib/api'

// class ProfilePage extends React.Component {

//   state = {
//     user: null
//   }

//   async componentDidMount() {
//     try {
//       const res = await getSingleProfile()
//       this.setState({ user: res.data })
//       console.log(user)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   render() {
//     if (!this.state.user) {
//       console.log('no user logged in')
//       return null
//     } else {
//       console.log('user')
//       return (
//         <section className="section">
//           <div className="container box">
//             <div className="container profile-img">
//               <figure className="image is-150x150">
//                 <img className="image is-rounded" src={this.state.user.profile_image} alt="profile"/>
//               </figure>
//               <h1 className="profile-name">{this.capitalizeFirstLetter(this.state.user.username)} </h1>
//               <p>{this.capitalizeFirstLetter(this.state.user.bio)}</p>
//               <br></br>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={this.handleEditProfile} className="editIcon"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>
//             </div>
//             <div className="columns">
//               <div className="column">
//                 <p className="title is-4">Art:</p>
//                 {this.state.user.created_art.map((art) =>
//                   <div key={art.id}>
//                     <p >{art.name}</p>
//                     <img className="image" src={art.image} alt={art.descripton}/>
//                     <p >{art.description}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>
//       )
//     }
//   }
// }


// export default ProfilePage
