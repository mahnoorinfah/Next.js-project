import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";


function Contact() {
  return (
    <div id= "contact " className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up"> To contact</h2>
                <p className='text-pink-500 text-[18px] pt-2' data-aos="zoom-in-up">
                    Drop me a line,give me a call,or send me a message by submitting the form.
                     </p>
                     <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                      < MdMarkEmailRead size={30}/> xyz@gmail.com
                     </div>
                     <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                      < BsFillTelephoneInboundFill size={30}/> (021)000-0000
                     </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id="name"/>
                </div>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id="email"/>
                </div>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor="message">Message</label>
                    <textarea
                    className='bg-transparent border border-accent'
                    id="message" rows={8}>
                        </textarea>
                </div>
                <button className='button bg-accent p-2 px-6 'data-aos="zoom-in-up"> Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
