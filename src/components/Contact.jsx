import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Contact = () => {
    return (
        <div id='contact' className='py-20'>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className='text-4xl lg:text-5xl font-bold mb-6'>Get in <span className='text-teal-800'>Touch</span></h1>
                    <p className='mb-2 '>
                        Have a Project in mind or want to discuss pontentian opportunities?
                    </p>
                </div>
                <div className='max-w-3xl mx-auto'>
                    <form action="" className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <input className='px-4 py-3 w-full border border-zinc-500 rounded outline-none ' type="text" placeholder='Enter Name' />
                            </div>
                            <div>
                                <input className='px-4 py-3 w-full border border-zinc-500 rounded outline-none ' type="email" placeholder='Enter Email' />
                            </div>

                        </div>
                        <div>
                            <input className='px-4 py-3  w-full border border-zinc-500 rounded outline-none' type="text" placeholder='Enter Subject' />
                        </div>
                        <div>
                            <textarea className='px-4 h-40 w-full py-3 border border-zinc-500 rounded outline-none' type="textarea" placeholder='Enter Massage' />
                        </div>
                        <div className='flex items-center justify-center md:items-end md:justify-end'>
                            <button className='flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white text-center cursor-pointer hover:bg-zinc-900 transition rounded-full '>Send Massage
                                <FaArrowRight />
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Contact