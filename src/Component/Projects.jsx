

const Projects = () => {
    return (
        <div className="flex flex-col items-center">
            <div className='bitter-Title'>
                <h2 className='text-lg md:text-3xl font-semibold text-center text-green-600 '>
                    Projects
                </h2>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                    <div className="card bg-base-100 my-4 w-[290px] md:w-96 shadow-xl">
                        <figure>
                            <img
                                className='h-[260px]'
                                src="https://i.ibb.co.com/FK8wnmQ/Screenshot-568.png"
                                alt="Image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Techno Bloger</h2>
                            <p className='font-bold'>A Bloge relate website</p>
                            <div className="card-actions justify-end">
                                <a href="https://techno-bloger.web.app" target="_blank" rel="noopener noreferrer"
                                className="btn btn-primary">
                                    Explore Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 my-4 w-[290px] md:w-96 shadow-xl">
                        <figure>
                            <img
                                className='h-[260px]'
                                src="https://i.ibb.co.com/2ywm4Tg/Screenshot-569.png"
                                alt="Image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">chillgamer</h2>
                            <p className='font-bold'>A game rebil website</p>
                            <div className="card-actions justify-end">
                                <a href="https://chillgamer-10bf2.web.app" target="_blank" rel="noopener noreferrer"
                                className="btn btn-primary">
                                    Explore Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 my-4 w-[290px] md:w-96 shadow-xl">
                        <figure>
                            <img
                                className='h-[260px]'
                                src="https://i.ibb.co.com/NyGspSy/Screenshot-570.png"
                                alt="Image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Ern coin</h2>
                            <p className='font-bold'>A web Game</p>
                            <div className="card-actions justify-end">
                                <a href="https://ubiquitous-fairy-d19822.netlify.app/" target="_blank" rel="noopener noreferrer"
                                className="btn btn-primary">
                                    Explore Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;