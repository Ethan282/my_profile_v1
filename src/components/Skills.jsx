import React from 'react'
import { skillsData } from '../assets/asstes'
import { motion } from 'motion/react'

function Skills() {
    return (
        <div id='skills' className='py-20'>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'>
                    <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
                        <span className='text-teal-600'>Technical</span>
                        skills
                    </h2>
                    <p className='text-xl mb-6 max-w-3xl mx-auto'>Mastraing the tool that power morden web experiences</p>

                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {
                        skillsData.map((skill, i) => (
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                                key={i} className="p-6 border border-teal-700 bg-teal-50/10 rounded-xl text-center cursor-pointer hover:border-b-4 hover:border-b-teal-800 hover:border-r-4 hover:border-r-teal-800 hover:-translate-y-1 transition-all duration-300">
                                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center border border-gray-300 bg-gray-50 mb-4">
                                    <skill.icon className='w-8 h-8 text-teal-800' />
                                </div>
                                <h3 className='text-xl font-bold text-zinc-600'>{skill.title}</h3>
                                <p className='text-sm text-zinc-500'>{skill.technologies.join(', ')}</p>

                            </motion.div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Skills