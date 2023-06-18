import img from './../../assets/R.jpg';
const Projects = () => {
    return (
        <div className="w-10/12 mx-auto mb-12">
            <h1 className="text-4xl text-center font-bold mt-28 mb-12">Projects</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='w-1/3'><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Listen</button> */}
                        <a href="https://cars-doctor-76ee6.web.app/" className="btn btn-primary">Live</a>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-8">
            <figure className='w-1/3'><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='w-1/3'><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;