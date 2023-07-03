import vImg from './../../assets/logo/Untitled design (10).mp4'
// import img from './../../assets/WhatsApp Image 2023-05-26 at 2.10.18 PM.jpeg'
import { AiFillGithub } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { BiSolidDownload } from 'react-icons/bi';
import { TbExternalLink } from 'react-icons/tb';
// import { RiWhatsappFill } from 'react-icons/ri';

const Home = () => {
  return (
    <div id='home'>
      <video className='mx-auto relative opacity-20' src={vImg} autoPlay muted loop></video>
      {/* <img className='w-1/4 absolute right-[10%] lg:top-1/3 top-16 rounded-xl' src={img} alt="" /> */}
      <div className='w-1/4 absolute right-[10%] lg:top-1/3 top-16 rounded-xl'>
        {/* <a className='btn btn-outline mr-3' href="/src/assets/Black and White Minimalist Professional Resume (11).pdf" target='_blank'>View Resume</a>
        <a className='btn btn-outline' href="/src/assets/Black and White Minimalist Professional Resume (11).pdf" download={true}>Download Resume</a> */}
      </div>
      <div className='text-start absolute lg:top-1/3 top-16 lg:left-[10%] left-8'>
        <h1 className='text-xl lg:text-4xl font-bold'>{`Hello, I'm Sk Shiam Ali`}</h1>
        <h6>Web Developer</h6>
        <p className='lg:w-7/12 w-3/5 hidden lg:block mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ducimus magnam ea nihil vel autem. Assumenda mollitia quo officia itaque! Accusantium quibusdam sapiente, nisi magnam reiciendis aspernatur. Incidunt, temporibus atque!</p>
        <p className='lg:w-7/12 w-3/5 lg:hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className='lg:mt-5 mt-2'>
          <a className='btn btn-outline mr-3 lg:btn-xl btn-sm' href="/src/assets/Black and White Minimalist Professional Resume (11).pdf" target='_blank'><TbExternalLink className='text-2xl'></TbExternalLink>View Resume</a>
          <a className='btn btn-outline btn-sm lg:btn-2xl' href="/src/assets/Black and White Minimalist Professional Resume (11).pdf" download={true}><BiSolidDownload className='text-2xl'></BiSolidDownload> Download Resume</a>
        </div>
      </div>
      <div className='text-start absolute lg:top-1/4 top-16 lg:right-[9%] right-7'>
        <AiFillGithub className='lg:text-7xl cursor-pointer hover:text-blue-400'></AiFillGithub>
        <BsDiscord className='lg:text-7xl cursor-pointer hover:text-blue-400'></BsDiscord>
        <SiGmail className='lg:text-7xl cursor-pointer hover:text-blue-400'></SiGmail>
        {/* <RiWhatsappFill className='text-7xl cursor-pointer hover:text-blue-400'></RiWhatsappFill> */}
        {/* <div className='mt-3 h-32 w-1 bg-slate-700 mx-auto'> */}
      {/* </div> */}
    </div>
    </div >
  );
};

export default Home;