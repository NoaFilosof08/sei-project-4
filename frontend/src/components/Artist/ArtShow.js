import React from 'react'
import { getSingleArt, getSingleUnpopulatedProfile, deleteArt } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'

class ArtShow extends React.Component {

  state = {
    art: null,
    user: null
  }

  async componentDidMount() {
    const artId = this.props.match.params.id
    try {
      const res = await getSingleArt(artId)
      this.setState({ art: res.data })
      if (isAuthenticated()){
        const userRes = await getSingleUnpopulatedProfile()
        this.setState({ user: userRes.data })
      }
    } catch (err) {
      console.log(err)
    }
  }

  isOwner = () => {
    if (this.state.user){
      if (this.state.user.id === this.state.art.owner.id) {
        return true
      }
    }
  }

  handleDelete = async () => {
    const artId = this.props.match.params.id
    try {
      await deleteArt(artId)
      console.log('delete clicked')
      this.props.history.push('/profile')
    } catch(err) {
      console.log(err)
    }

  }


  handleEdit = () => {
    console.log('edit clicked')
    const artId = this.props.match.params.id
    this.props.history.push(`/art/edit/${artId}`)
  }

  render() {
    console.log(this.state)
    const isOwner = this.isOwner()
    const isLoggedIn = isAuthenticated()
    if (!this.state.art) {
      return null
    } else {
      return (
        <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{this.state.art.name}</h1>
            <h2>{this.state.art.owner.username}</h2>
            <img className="image" src={this.state.art.image} alt={this.state.art.descripton}/>
          </div>
          <p>{this.state.art.description}</p>
          <p>£{this.state.art.price}</p>
          { isOwner ?
          <div>
            <p>Enquiries:</p>
            {this.state.art.enquiries.map((enq)  =>
              <div key={enq.id}>
              <p>{enq.owner.username}</p>
              <p>{enq.text}</p>
              </div>
              )
            }
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={this.handleDelete} ><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={this.handleEdit} className="editIcon"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>
          </div>
          :
          <div></div>
        }
        { (!isOwner && isLoggedIn) ?
        <button className="button">Enquire about this Art?</button>
        :
        <p></p>
        }
        <div>

        </div>
        </div>
      </section>
      )
    }
  }
}
export default ArtShow
