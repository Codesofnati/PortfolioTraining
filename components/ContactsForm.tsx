import React from 'react'

const ContactsForm = () => {
  return (
    <form>
      <h2 className='text-2xl font-bold text-center mb-4'>Contact Me</h2>
      <div className='mb-4'>
        <input 
        type='text' 
        placeholder='Your Name'
        name='name'
        className='w-full px-3 py-2 text-sm border-0 text-gray-200 bg-white placeholder-gray-400 rounded shadow '/>
      </div>
      <div className='mb-4'>
        <input 
        type='email' 
        placeholder='Your Name'
        name='email'
        className='w-full px-3 py-2 text-sm border-0 text-gray-200 bg-white placeholder-gray-400 rounded shadow '/>
      </div>
      <div className='mb-4'>
        <input 
        placeholder='Your message'
        name='message'
        className='w-full px-3 py-2 text-sm border-0 text-gray-200 bg-white placeholder-gray-400 rounded shadow '/>
      </div>
      <button className='px-6 py-3 mb-5 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue'>
        Send a message
      </button>
    </form>
  )
}

export default ContactsForm