import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { motion } from 'motion/react'
import { assets } from '../assets/asstes'
import { toast } from 'react-hot-toast';


const Contact = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.target);
            formData.append("access_key", "9a6c7abc-aca9-4e7a-8986-aff3216ec2db");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                toast.success("Form submitted successfully!", {

                    autoClose: 5000,
                })

                e.target.reset(); // Reset the form after successful submission
            }
            else {
                toast.error(data.message, {
                    autoClose: 5000,
                });
            }

            // setResult(data.success ? "Success!" : "Error");
            console.log(data)
        }
        catch (error) {
            console.log(error)
            toast.error("An error occurred while submitting the form.", {
                position: "top-right",
                autoClose: 5000,
            });
        }

    }
    return (
        <div id='contact' className='py-20'>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mb-16">
                    <h1 className='text-4xl lg:text-5xl font-bold mb-6'>Get in <span className='text-teal-800'>Touch</span></h1>
                    <p className='mb-2 '>
                        Have a Project in mind or want to discuss pontentian opportunities?
                    </p>
                </motion.div>
                <div className='max-w-3xl mx-auto'>
                    <motion.form
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}

                        onSubmit={onSubmit} className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                            <div className="flex pl-3 items-center  border border-zinc-900 rounded-lg ">

                                <img src={assets.person_icon} alt="" />
                                <input type="text" name='name' placeholder="Enter your name" className=" w-full p-3 text-sm outline-none" required />
                            </div>
                            <div className="flex pl-3 items-center  border border-zinc-900 rounded-lg ">
                                <img src={assets.email_icon} alt="" />
                                <input type="email" name='email' placeholder="Enter your email" className=" w-full p-3 text-sm outline-none" required />
                            </div>

                        </div>
                        {/* <div>
                            <input className='px-4 py-3  w-full border border-zinc-500 rounded outline-none' type="text" placeholder='Enter Subject' />
                        </div> */}
                        <div>
                            <textarea name='message' rows={8} placeholder="Enter your message" className="w-full p-3 text-sm outline-none border  border-zinc-900 rounded-lg" required />
                        </div>
                        <div className='flex items-center justify-center md:items-end md:justify-end'>
                            <button className='flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white text-center cursor-pointer hover:scale-105 hover:bg-zinc-900 transition rounded-full '>Send Massage
                                <FaArrowRight />
                            </button>
                        </div>
                    </motion.form>

                </div>
            </div>

        </div>
    )
}

export default Contact