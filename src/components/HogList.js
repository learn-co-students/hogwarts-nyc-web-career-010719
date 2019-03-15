import React from 'react'

import Hog from './Hog'
import uuid from 'uuid'

const HogList = props => {
  return (
    <div>
      {props.hogs.map(hog => <Hog key={uuid()} hog={hog} />)}
    </div>
  )
}

export default HogList
