'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '../../data/projects_list.json';
import { motion } from 'framer-motion';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import './projects.css';

const Page = () => {
    interface Project {
        name: string;
        dept: string;
        description: string;
        link: string;
        image: string;
    }

    const router = useRouter();

    // State to keep track of the currently displayed project index
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const projectValues = Object.values(projects);

    // Function to go to the next project
    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectValues.length);
    };

    // Function to go to the previous project
    const handlePrev = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === 0 ? projectValues.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <button className='relative z-10 ml-10' onClick={() => router.push("/")}>Go Back</button>

            {/* Display the currently selected project */}
            <div className="projects_list">
                <ul>
                    <li className="absolute">
                        <a href={projectValues[currentProjectIndex].link}>
                            <img className="image" src={projectValues[currentProjectIndex].image} alt={projectValues[currentProjectIndex].name} />
                            <div className='project_details ml-10'>
                                <div className="pro_name" style={{ letterSpacing: "7px" }}>{projectValues[currentProjectIndex].name}</div>
                                <div className="pro_dept">{projectValues[currentProjectIndex].dept}</div>
                                <div className="pro_description">{projectValues[currentProjectIndex].description}</div>
                                <button className='link'><a href={projectValues[currentProjectIndex].link}>Go to page</a></button>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Thumbnail Section */}
            <div className="thumbnail">
                {projectValues.map((project: Project, index: number) => (
                    <motion.div
                        key={index}
                        className={`thumbnail-item ${index === currentProjectIndex ? 'active' : ''}`} // Add an 'active' class for the current thumbnail
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={project.image} alt={project.name} className="thumbnail-image" />
                        <div className="content">
                            <div className="title">{project.name}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="arrows">
                <button id="prev" onClick={handlePrev}> <ArrowLeftOutlined /></button>
                <button id="next" onClick={handleNext}> <ArrowRightOutlined /></button>
            </div>

            <div className="time"></div>
        </div>
    );
};

export default Page;
