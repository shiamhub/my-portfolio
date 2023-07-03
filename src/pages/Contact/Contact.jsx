import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';

import { AiFillGithub } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { RiWhatsappFill } from 'react-icons/ri';
const Contact = () => {
    return (
        <div id='contact' className='w-10/12 mx-auto'>
            <h1 className="text-4xl text-center font-bold lg:mt-20 mb-12">Contact me</h1>

            <div className="flex gap-5">
                <div className='w-1/3 rounded-xl bg-base-200 flex flex-row items-center justify-center gap-8'>
                    <AiFillGithub className='lg:text-3xl cursor-pointer hover:text-blue-400'></AiFillGithub>
                    <BsDiscord className='lg:text-3xl cursor-pointer hover:text-blue-400'></BsDiscord>
                    <SiGmail className='lg:text-3xl cursor-pointer hover:text-blue-400'></SiGmail>
                    <RiWhatsappFill className='text-3xl cursor-pointer hover:text-blue-400'></RiWhatsappFill>
                </div>
                <div className='w-2/3'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </div>
                </div>
            </div>

            <div className='lg:grid space-y-6 lg:space-y-0 grid-cols-3 gap-8 items-center bg-neutral lg:p-24 p-12 my-24 rounded-xl text-white'>
                <div>
                    <HiOutlineMail className='text-7xl'></HiOutlineMail>
                    <p>Email: skshiam129@gmail.com</p>
                </div>
                <div>
                    <FiPhone className='text-5xl'></FiPhone>
                    <p>Phone Number: 01568235129</p>
                </div>
                <div>
                    <SlLocationPin className='text-5xl'></SlLocationPin>
                    <p>Address: Rupsha, Khulna</p>
                </div>

            </div>
        </div>
    );
};

export default Contact;