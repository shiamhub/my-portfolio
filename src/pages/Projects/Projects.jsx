import project from './../../data/project.json'
import { AiFillGithub, AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { CiServer } from 'react-icons/ci';
const Projects = () => {
    return (
        <div className="w-10/12 mx-auto mb-12 mt-24" id='projects'>
            <h1 className="text-4xl text-center font-bold mt-28 mb-12">Projects</h1>

            <div className='grid grid-cols-1 gap-5'>
                {
                    project?.map(a => <div key={a.id}>
                        {/* <a href={a.live} target='_blank' rel="noreferrer"> */}
                        <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden mb-12">
                            <figure className='lg:w-1/2 w-full hover:scale-125 duration-500 object-cover'><img src={a?.images} className='' alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{a?.name}</h2>
                                <p className='lg:w-[540px] hidden lg:block'>{a?.description}</p>
                                
                                <div className="card-actions justify-end hidden lg:block">
                                    {a?.code && <a href={a?.code} target='_blank' rel="noreferrer" className='btn btn-outline'><AiFillGithub className='mr-2 text-2xl'></AiFillGithub>View Code</a>}
                                    {a?.server && <a href={a?.server} target='_blank' rel="noreferrer" className='btn btn-outline'><CiServer className='mr-2 text-2xl'></CiServer>View Server</a>}
                                    {a?.live && <a href={a?.live} target='_blank' rel="noreferrer" className='btn btn-outline'><AiOutlineDeliveredProcedure className='mr-2 text-2xl'></AiOutlineDeliveredProcedure>View WebSide</a>}
                                </div>
                                <div className="card-actions justify-end lg:hidden">
                                    {a?.code && <a href={a?.code} target='_blank' rel="noreferrer" className='btn btn-outline btn-sm'><AiFillGithub className='mr-2 text-2xl'></AiFillGithub>View Code</a>}
                                    {a?.server && <a href={a?.server} target='_blank' rel="noreferrer" className='btn btn-outline btn-sm'><CiServer className='mr-2 text-2xl'></CiServer>View Server</a>}
                                    {a?.live && <a href={a?.live} target='_blank' rel="noreferrer" className='btn btn-outline btn-sm'><AiOutlineDeliveredProcedure className='mr-2 text-2xl'></AiOutlineDeliveredProcedure>View WebSide</a>}
                                </div>
                            </div>
                        </div>
                        {/* </a> */}
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;