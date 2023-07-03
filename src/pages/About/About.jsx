import img from './../../assets/WhatsApp Image 2023-05-26 at 2.10.18 PM.jpeg'
const About = () => {
    return (
        <div className="w-10/12 mx-auto lg:mt-36 mt-20 -z-50" id="about">
            <h1 className="text-4xl text-center font-bold lg:mt-20 mb-12">About us</h1>
            <div className='lg:flex justify-center'>
                <div className="lg:h-[50vh] h-[470px] w-11/12 bg-blue-600 rounded-xl relative shadow-2xl">
                    <p className="bg-sky-300 lg:p-12 dark:text-black p-6 rounded-xl absolute left-[9%] w-full top-[5%] lg:top-16 hidden lg:block">As a web developer, I want to create high-quality, interactive, and user-friendly web applications
                    using modern front-end technologies. I strive to build robust and scalable applications that
                    deliver an exceptional user experience. Lorem ipsum dolor sit amet consectetur adipisicing elit. In quasi qui exercitationem velit hic architecto delectus enim, animi aperiam esse deserunt doloribus saepe rem error accusantium aliquid, ipsum tenetur amet perferendis, distinctio quae ullam iste quod eligendi! Voluptatibus sit nam dolor vero sapienteLorem ipsum dolor sit amet consectetur adipisicing elit. In quasi qui exercitationem velit hic architecto delectus enim, animi aperiam esse deserunt doloribus saepe rem error accusantium aliquid, ipsum tenetur amet perferendis, distinctio quae ullam iste quod eligendi! Voluptatibus sit nam dolor vero sapiente vero sapiente, recusandae numquam vitae hic voluptas officia explicabo, quod nulla excepturi veniam dolorum nostrum cum a ipsum dicta incidunt sequi consequatur ratione. Tempore illum, architecto possimus voluptatibus, asperiores neque sit deleniti sint non</p>
                    <p className="bg-sky-300 lg:p-12 p-6 rounded-xl absolute left-[9%] w-full top-[5%] lg:top-28 lg:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. In quasi qui exercitationem velit hic architecto delectus enim, animi aperiam esse deserunt doloribus saepe rem error accusantium aliquid, ipsum tenetur amet perferendis, distinctio quae ullam iste quod eligendi! Voluptatibus sit nam dolor vero sapiente, recusandae numquam vitae hic voluptas officia explicabo, quod nulla excepturi veniam dolorum nostrum cum a ipsum dicta incidunt sequi consequatur ratione. Tempore illum, architecto possimus voluptatibus, asperiores neque sit deleniti sint non</p>
                </div>
                <img className='lg:w-[29%] rounded-xl lg:ml-36 mt-16 lg:mt-0' src={img} alt="" />
            </div>

        </div>
    );
};

export default About;