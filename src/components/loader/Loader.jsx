import React from 'react'
import { DotSpinner } from '@uiball/loaders'
import './loader.css'

function Loader() {
  return (
    <div className='loader'>
        <DotSpinner 
            size={90}
            speed={0.9} 
            color="blue"
        />
    </div>
  )
}

export default Loader
