// import img from './assets/20180618093055.png'
import vImg from './assets/Untitled design (8).mp4'
import img from './assets/WhatsApp Image 2023-05-26 at 2.10.18 PM.jpeg'
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <img className='mx-auto' src={img} alt="" /> */}
      {/* <progress className="progress w-56 flex mx-auto"></progress> */}
      <div>
        <video className='mx-auto relative opacity-50' src={vImg} autoPlay muted loop></video>
        <img className='w-1/4 absolute right-[10%] top-1/3 rounded-xl' src={img} alt="" />
        <div className='text-start absolute top-1/2 left-[20%]'>
          <h1 className='text-4xl font-bold'>Hello</h1>
          <p className='w-5/12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ducimus magnam ea nihil vel autem. Assumenda mollitia quo officia itaque! Accusantium quibusdam sapiente, nisi magnam reiciendis aspernatur. Incidunt, temporibus atque!</p>
        </div>
      </div>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default App;