import { useState } from "react";

const Skills = () => {
    const [page, setPage] = useState(1);
    console.log(page);
   
    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-4xl text-center font-bold mt-52 mb-12">Skills</h1>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${page === 1 ? 'block' : 'hidden'}`}>
                <div className="p-12 text-start bg-base-100 rounded-xl shadow-xl">
                    <h1 className="text-4xl font-bold">HTML</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-base-100 rounded-xl shadow-xl">
                    <h1 className="text-4xl font-bold">CSS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-base-300 rounded-xl shadow-xl">
                    <h1 className="text-4xl font-bold">JavaScript</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-base-100 rounded-xl shadow-xl">
                    <h1 className="text-4xl font-bold">React</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-base-100 rounded-xl shadow-xl">
                    <h1 className="text-4xl font-bold">Tailwind</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${page === 2 ? 'block' : 'hidden'}`}>
                <div className="p-12 text-start bg-sky-300 rounded-xl">
                    <h1 className="text-4xl font-bold">Node JS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-sky-300 rounded-xl">
                    <h1 className="text-4xl font-bold">Express JS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-sky-300 rounded-xl">
                    <h1 className="text-4xl font-bold">Mongo DB</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-sky-300 rounded-xl">
                    <h1 className="text-4xl font-bold">Next JS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-sky-300 rounded-xl">
                    <h1 className="text-4xl font-bold">Firebase</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${page === 3 ? 'block' : 'hidden'}`}>
                <div className="p-12 text-start bg-sky-300 rounded-xl">
                    <h1 className="text-4xl font-bold">Rest API</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-sky-300 rounded-xl">
                    <h1 className="text-4xl font-bold">React Query</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-sky-300 rounded-xl">
                    <h1 className="text-4xl font-bold">Netlify</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-sky-300 rounded-xl">
                    <h1 className="text-4xl font-bold">Vercel</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
                <br />
                <div className="p-12 text-start bg-sky-300 rounded-xl">
                    <h1 className="text-4xl font-bold">Tailwind</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum sunt repudiandae praesentium placeat, dolor autem, iusto repellendus officia assumenda sit sed eveniet officiis magni nihil quia iste corporis! Distinctio.</p>
                </div>
            </div>
            
            <div className="text-center my-8">
                <button onClick={() => setPage(1)} className="btn btn-square btn-outline">
                    1
                </button>
                <button onClick={() => setPage(2)} className="btn btn-square btn-outline mx-2">
                    2
                </button>
                <button onClick={() => setPage(3)} className="btn btn-square btn-outline">
                    3
                </button>
            </div>

        </div>
    );
};

export default Skills;