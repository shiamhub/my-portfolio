import img from './../../assets/WhatsApp Image 2023-05-26 at 2.10.18 PM.jpeg'
const About = () => {
    return (
        <div className="w-10/12 mx-auto lg:mt-36 mt-20 -z-50" id="about">
            <h1 className="text-4xl text-center font-bold lg:mt-20 mb-12">About us</h1>
            <div className='lg:flex justify-center'>
                <div className="lg:h-[50vh] h-[470px] w-11/12 bg-blue-600 rounded-xl relative shadow-2xl">
                    <p className="bg-sky-300 lg:p-12 dark:text-black p-6 rounded-xl absolute left-[9%] w-full top-[5%] lg:top-16 hidden lg:block">As a web developer, I want to create high-quality, interactive, and user-friendly web applications
                        using modern front-end technologies. I strive to build robust and scalable applications that
                        deliver an exceptional user experience. I recently completed an intensive web development course at Programming Hero, where I honed my skills in the MERN stack. Equipped with a solid foundation in JavaScript, I thrive on crafting interactive and responsive user interfaces.
                        With a Bachelo is degree in Computer Science and Engineering from Daffodil International University, I have gained a comprehensive understanding of software development principles and practices. My educational background, combined with hands-on experience in building applications using MongoDB, Express.js, React, and Node.js, enables me to develop robust and scalable solutions. I am passionate about staying up-to-date with the latest industry trends and continuously expanding my knowledge to deliver cutting-edge projects.</p>
                    <p className="bg-sky-300 lg:p-12 p-6 rounded-xl absolute left-[9%] w-full top-[5%] lg:top-28 lg:hidden">I recently completed an intensive web development course at Programming Hero, where I honed my skills in the MERN stack. Equipped with a solid foundation in JavaScript, I thrive on crafting interactive and responsive user interfaces.
                        With a Bachelor is degree in Computer Science and Engineering from Daffodil International University, I have gained a comprehensive understanding of software development principles and practices. My applications using MongoDB, Express.js, React, and Node.js, enables me to develop robust and scalable solutions.</p>
                </div>
                <img className='lg:w-[29%] rounded-xl lg:ml-36 mt-16 lg:mt-0' src={img} alt="" />
            </div>

        </div>
    );
};

export default About;