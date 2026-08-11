import React from 'react'
import { assets, profileData } from '../assets/asstes'
import cvFile from '../assets/Tufan_Dutta _CV.pdf'
import { FaCode } from 'react-icons/fa6'
import { motion } from 'motion/react'

function AboutMe() {
    return (
        <div id='about' className='py-20  '>
            <div className='max-w-7xl mx-auto px-6'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="order-1  ">
                        <h2 className='text-4xl md:text-5xl mb-4 font-bold'>
                            <span className='text-teal-800 '>About</span>
                            <span>Me</span>
                        </h2>
                        <p className='text-md mb-2 leading-8'>
                            Front-End Developer with 4+ years of experience in Angular (10-18),
                            TypeScript, and CSS, delivering enterprise insurance applications.
                            Reduced critical defects by 30% and improved client communication efficiency by 25% through Agile methodologies.


                        </p>
                        <p className='text-md mb-2 leading-8'>
                            Awarded for key
                            contributions to enterprise insurance applications. Experienced in mentoring, deployment, and full-cycle
                            software development.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
                            {
                                profileData.map((profile, i) => (
                                    <motion.div
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.2, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        key={i} className="w-full h-55 sm:w-50 p-6 border border-zinc-400 rounded hover:border-zinc-600 cursor-pointer hover:border-b-4 hover:border-b-zinc-800 hover:border-r-4 hover:border-r-zinc-800  transition duration-300 hover:-translate-y-1 ">
                                        <FaCode className='text-3xl mb-4' />
                                        <h1 className='text-xl font-bold mb-4'>{profile.title} </h1>
                                        <p>{profile.technologies.join(', ')}</p>
                                    </motion.div>
                                ))
                            }
                        </div>
                        <a href={cvFile} download="Tufan_Dutta_CV.pdf" className='px-8 py-4 bg-zinc-700 text-white rounded-full cursor-pointer transition duration-300 hover:scale-105  hover:bg-zinc-900 inline-block'>
                            Download Resume
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className='order-1 lg:order-2 justify-center pt-8 px-8'>
                        <div className=" relative w-full ">
                            <div className=' rounded-4xl overflow-hidden'>
                                <img className='w-full h-full object-cover' src={assets.profileImg} alt="profileImg" />

                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>

        </div>
    )
}

export default AboutMe