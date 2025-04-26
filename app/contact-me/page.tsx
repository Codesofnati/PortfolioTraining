import ContactsForm from '@/components/ContactsForm'
import React from 'react'

const Page = () => {
  return (
    <div 
    className='w-screen h-screen bg-cover bg-center flex items-center justify-center'
    style={{ backgroundImage: "url('./bg-3.jpg')" }}>
      <div className='h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white'
      style={{ backgroundImage: "url('./atombg-comp.webp')" }}>
      <div className=' absolute left-20 bottom-16 w-[70%] md:w-[30%]'>
<ContactsForm/>
      </div>
        <div>

        </div>
      </div>
    </div>

  )
}

export default Page