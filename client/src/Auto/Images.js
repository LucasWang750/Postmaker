import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Recognize from './Recognize.js'

export default props => 

(props.images.map((image, i) =>
    <div key={i} className='fadein App'>
      <img 
        src={image.secure_url} 
        alt='' 
        onError={() => props.onError(image.public_id)}
        className="middle"
      />
      <Recognize images={image}/>
    </div>
  )
)
  