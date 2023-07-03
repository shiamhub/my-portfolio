import { useEffect, useState } from "react";
import skills from './../../data/skills.json'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
    const [page, setPage] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(5);

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();

        if (page === 1) {
            setStart(0);
            setEnd(5);
        }
        else if (page === 2) {
            setStart(5);
            setEnd(10);
        }
        else if (page === 3) {
            setStart(10);
            setEnd(15);
        }
        else if (page === 4) {
            setStart(15);
            setEnd(20);
        }

    }, [page])


    return (
        <div className="w-10/12 mx-auto lg:mt-28 mt-20" id="skills">
            <h1 className="text-4xl text-center font-bold mb-12">Skills</h1>
            
            <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3`}>
                {
                    skills.slice(start, end).map(a => <>
                        <div key={a.id} data-aos={a?.style?.aos} className={`lg:p-6 p-3 text-start bg-base-100 shadow-xl rounded-xl w-full ${a?.style?.center}`}>
                            <div>
                                <div className="flex justify-around items-center gap-2">
                                    {/* <img className="w-24 rounded-xl" src={a.images} alt="" /> */}
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-primary">
                                            <div className="rating rating-xs">
                                                {(a?.rating >= 1)  ? <input type="solid" name="rating-5" className="mask mask-star-2 bg-orange-400" /> : <input type="solid" name="rating-5" className="mask mask-star-2 bg-blue-600" />}
                                                {(a?.rating >= 2)  ? <input type="solid" name="rating-5" className="mask mask-star-2 bg-orange-400" /> : <input type="solid" name="rating-5" className="mask mask-star-2 bg-blue-600" />}
                                                {(a?.rating >= 3)  ? <input type="solid" name="rating-5" className="mask mask-star-2 bg-orange-400" /> : <input type="solid" name="rating-5" className="mask mask-star-2 bg-blue-600" />}
                                                {(a?.rating >= 4)  ? <input type="solid" name="rating-5" className="mask mask-star-2 bg-orange-400" /> : <input type="solid" name="rating-5" className="mask mask-star-2 bg-blue-600" />}
                                                {(a?.rating >= 5)  ? <input type="solid" name="rating-5" className="mask mask-star-2 bg-orange-400" /> : <input type="solid" name="rating-5" className="mask mask-star-2 bg-blue-600" />}
                                            </div>
                                        </span>
                                        <div className="grid place-items-center">
                                            <img className=" rounded-xl" src={a.images} alt="logo" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-8 lg:mt-0">
                                        <div className="radial-progress" style={{ "--value": a?.health, "--size": "3rem", "--thickness": "6px" }}>{a?.health}%</div>
                                        <h1>Health</h1>
                                    </div>
                                </div>
                                <h1 className="font-bold text-xl lg:text-center lg:mt-4 mt-0">{a.title}</h1>
                                <p className="hidden">{a.description}</p>
                            </div>
                        </div>
                        <br className="hidden lg:block" />
                    </>)
                }
            </div>

            <div className="text-center my-8">
                <button onClick={() => setPage(1)} className={`btn btn-square btn-outline ${page === 1 && 'btn-active'}`}>
                    1
                </button>
                <button onClick={() => setPage(2)} className={`btn btn-square btn-outline mx-2 ${page === 2 && 'btn-active'}`}>
                    2
                </button>
                <button onClick={() => setPage(3)} className={`btn btn-square btn-outline ${page === 3 && 'btn-active'}`}>
                    3
                </button>
                <button onClick={() => setPage(4)} className={`btn btn-square btn-outline mx-2 ${page === 4 && 'btn-active'}`}>
                    4
                </button>
            </div>

        </div>
    );
};

export default Skills;