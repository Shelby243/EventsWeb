import React from 'react'
import Image from 'next/image'
const SingleEvent = ({data}) => {
  return (
    <div className='event_single_page'>
            <h1>{data.title} </h1><br/>
            <Image src={data.image} width={1000} height={500} alt={data.title} />
            
            <p>{data.description} </p><br/>
            <form className="email_registration">
                <label>Get register for this event! </label>
                <input type="email" id="email" placeholder='please insert your email' />
                <button type='button'> Submit</button>
            </form>
            
        </div>
  )
}

export default SingleEvent
