import React from "react";
import { projectData } from "../assets/asstes";

const Work = () => {
    return (
        <div id="work" className="py-20">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-6">
                        Feature
                        <span className="text-teal-600">Project</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        {" "}
                        web aplication build with mordern technologies
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {projectData.map((project, index) => (
                        <div
                            key={index} className=" group rounded overflow-hidden hover:shadow-lg cursor-pointer border border-gray-200 transition hover:-translate-y-1 duration-300"
                        >
                            <div className="relative flex items-center justify-center">
                                <img className=" group-hover:opacity-100" src={project.image} alt="" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2"> {project.title} </h3>
                                <p className=" text-shadow-slate-900 text-sm">{project.description} </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tech.map((lang,i)=>(
                                        <span key={i} className="px-4 py-1  bg-gray-100 text-xs font-semibold rounded-full">{lang} </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
