import React  from 'react'
import loading  from './loading.gif'

const spinner=()=>{
  
    return (
      <div className='text-center'>
        <img style={{height:'30px', width:'30px'}} src={loading} alt="loading" />
        
      </div>
    )
  }

export default spinner