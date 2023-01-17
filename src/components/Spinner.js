import React, { Component } from 'react'
import loading  from './loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img style={{height:'30px', width:'30px'}} src={loading} alt="loading" />
        
      </div>
    )
  }
}
