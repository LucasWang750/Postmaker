import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import WakeUp from './WakeUp'
import { API_URL } from './config'
import './Auto.css'
import Recognize from './Recognize'

export default class Auto extends Component {
  
  state = {
    uploading: false,
    images: []
  }

  onChange = e => {
    const errs = [] 
    const files = Array.from(e.target.files)
  
    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    this.setState({ uploading: true })

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(images => {
      this.setState({
        uploading: false, 
        images
      })
    })
    .catch(err => {
      err.json().then(e => {
        this.setState({ uploading: false })
      })
    })
  }

  filter = id => {
    return this.state.images.filter(image => image.public_id !== id)
  }

  removeImage = id => {
    this.setState({ images: this.filter(id) })
  }

  onError = id => {
    this.setState({ images: this.filter(id) })
  }
  
  render() {
    const {uploading, images } = this.state
    
    const content = () => {
      switch(true) {
        case uploading:
          return <Spinner/>
        case images.length > 0:
          return (<Images 
                  images={images} 
                  removeImage={this.removeImage} 
                  onError={this.onError}
                 />)
        default:
          return <Buttons onChange={this.onChange} />
      }
    }

    return (
      <div className='container'>
        <div className='buttons'>
          {content()}
        </div>
      </div>
    )
  }
}
