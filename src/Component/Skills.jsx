import React, { useEffect, useState } from 'react';
import skills from './Data.json';


const Skills = () => {
    const [skill,setskill] = useState([])
    
    useEffect( () =>{
        setskill(skills);
        fetch (skills)
        .then (res => res.json() )
        .then (data => setskill(data))
    } , [] )

    return (
        <div className='flex flex-col items-center mt-3 mb-8'>
            <div className='bitter-Title'>
                <h2 className='text-lg md:text-2xl font-semibold text-green-600 '>
                    Skills
                </h2>
            </div>
            <div className="card bg-base-100 shadow-2xl p-6 sm:p-8 w-[100vw] sm:w-[70vw]  ">
                    <div className="flex flex-col xl:flex-row items-start xl:justify-between mx-2 ">
                        {/* Left Section */}
                        <div>
                            <div className="flex flex-row items-center gap-2 mb-4">
                                <h2 className='text-base sm:text-lg md:text-xl font-semibold text-red-500'>
                                    Front End :
                                </h2>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    Html
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    Ashraful Pathan
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    Css
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    Tailwind Css
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    Javascript
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    Vite
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    React
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    Figma
                                </p>
                            </div>
                        </div>
                        {/* Right Section */}
                        <div>
                            <div className="flex flex-row items-center gap-2 mb-4">
                                <h2 className='text-base sm:text-lg md:text-xl font-semibold text-red-500'>
                                    Back End :
                                </h2>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    Node js
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    Express js
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    MongoDB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='text-base sm:text-lg md:text-xl mt-5 font-semibold text-red-500'>
                    Skill in card format
                </h2>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-7   '>
                    {
                        skill.map( skill =>(
                            <div key={skill.id}  >
                                <div className="card bg-base-100 mt-4 mb-4 w-[290px] md:w-96 shadow-xl">
                                    <figure>
                                        <img
                                            className='h-[260px]'
                                            src={skill.image}
                                            alt="Image" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{skill.Skill}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;