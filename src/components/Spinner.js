import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src = {loading} className = "my-3" alt = "loading" width="120px" />
      </div>
    )
  
}

export default Spinner
