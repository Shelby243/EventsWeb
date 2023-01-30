import React, { useState } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
const SingleEvent = ({data}) => {
    const inputEmail=useRef()
    const router=useRouter()
    const [message,setMessage]=useState()

    const onSubmit= async (e)=>{
        e.preventDefault()
        
        const emailValue=inputEmail.current.value
        const eventId=router?.query.id

        const validRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(!emailValue.match(validRegex)){
            setMessage('Please introduce the correct email address')
        }
        try{
            const response=await fetch('/api/email-registration',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email:emailValue, eventId})
            })
            //POST fetch requesst
            //body emailvalue and the eventId
            if(!response.ok) {
               // throw new Error(`Error: ${response.status}`)
               const dat=await response.json()
               setMessage(dat.message)
               return
            }
            else
            {
            const data= await response.json()
            setMessage(data.message)
            inputEmail.current.value=''
        }
            
        }

        
        catch(e){
                console.log('error',e)

        }
    }
  return (
    <div className='event_single_page'>
            <h1>{data.title} </h1><br/>
            <Image src={data.image} width={1000} height={500} alt={data.title} />
            
            <p>{data.description} </p><br/>
            <form className="email_registration" onSubmit={onSubmit}>
                <label>Get register for this event! </label>
                <input ref={inputEmail} 
                 id="email" 
                placeholder='please insert your email' />
                <button type='submit'> Submit</button>
            </form><br/>
            <p>{message} </p>
        </div>
  )
}

export default SingleEvent
