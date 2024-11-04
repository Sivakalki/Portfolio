'use client'
import { ArrowRightOutlined, CaretRightOutlined , LinkedinOutlined, GithubOutlined, TwitterOutlined} from "@ant-design/icons";
import { MailOutlined, LogoutOutlined } from "@ant-design/icons";
import { projects } from '../data/projects_list.json'
import { Variants, motion } from 'framer-motion';
import Navbar from "./navbar";
import { Link } from "react-scroll";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
// import {SplitStringUsingRegex} from '../utils/SplitStringUsingRegex'
export default function Home() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectListRef = useRef<HTMLDivElement>(null);
  // console.log(projects, " is the project details");
  const about_me = "Hi I am Siva Kalki . i am a full stack developer"
  const description = "I provide a strong background in frontend and backend development as a committed and talented Full Stack Developer. I am also good at coding, which helps to solve complex problems quickly.I am dedicated to keeping up with the most recent technological advancements and thrive in collaborative settings."
  const about_me_chars = about_me.split('');
  const description_chars = description.split('');
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  }
  useEffect(() => {
    const container = projectListRef.current;
    if (container) {
      const handleScroll = () => {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      };

      const interval = setInterval(handleScroll, 30); // Adjust interval for scroll speed

      return () => clearInterval(interval);
    }
  }, []);
  useEffect(() => {
    const listWrapper:any = projectListRef.current;
    let scrollAmount = 0;

    function startScroll() {
      scrollAmount += 5; // Adjust speed if needed
      if (listWrapper.scrollLeft >= listWrapper.scrollWidth / 2) {
        listWrapper.scrollLeft = 0; // Reset scroll position seamlessly
      } else {
        listWrapper.scrollLeft += 3; // Scroll to the right
      }
    }

    const interval = setInterval(startScroll, 20); // Control speed with interval

    return () => clearInterval(interval); // Clean up on unmount
  }, []);
  const handleCopyEmail=()=>{
    navigator.clipboard.writeText("sivakalkipusarla6.com");
    alert("Email copied to clipboard!");
  }
  const handleLinkNavigation=(url:any)=>{
    window.open(url, "_blank");
  }
  return (
    <div>
      <Navbar/>
      <div className="box mt-40 ml-32 mr-32 h-56 animate-slide-down">
          {/* <img src="/images/MyImage.jpg" alt="Its my image" className="h-20"/> */}
      </div>
      <div className="name ml-60 " id="home">SIVA KALKI PUSARLA</div>
      <div className="box2 animate-slide-up h-16 ml-32 mr-32"></div>
      <div className="namedown flex space-x-5 ml-32 mr-32 justify-between mt-16">
        <div className="dept ">Full Stack Developer</div>
        <div className="connect mt-2">
          <Link to="contact" smooth = {true} spy={true} offset={-200} duration= {500} className="ml-5 mr-5 mt-1 mb-1 font-kanit">Get in touch  <ArrowRightOutlined /></Link>
          {/* <button className="ml-5 mr-5 mt-1 mb-1">Get in touch  <ArrowRightOutlined /></button> */}
        </div>
      </div>
      <div className="box3 about items-center justify-between mt-48 ml-32 mr-32 flex ">
        <motion.div initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.05 }} className="about_name font-kanit ml-8 mt-16 mb-16">
          {about_me_chars.map(char => (
            <motion.span key={char} transition={{ duration: 0.5 }} variants={charVariants}>{char}</motion.span>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.005 }} className="about_summary font-kanit font-kanit-light mr-8 mt-16 mb-16">
          {description_chars.map(char => (
            <motion.span key={char} transition={{ duration: 0.01 }} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="box4 experience mt-40 items-center justify-between ml-32 mr-32 flex">
        <div className="experience_heading mt-16 ml-8 mb-16 font-kanit">My experiences </div>
        <div className="experiences items-start mt-16 mr-60 mb-16 font-kanit">
          <motion.div
            whileHover={{ x: -10 }} // Moves the button right by 10px
            transition={{ type: "spring" }}
            className="exp"
            id="1"
            style={{ position: 'relative' }}>
            <button className="mt-5 ml-3"><CaretRightOutlined />    GA Digital Technologies</button>
          </motion.div>
          <motion.div
            whileHover={{ x: -10 }} // Moves the button right by 10px
            transition={{ type: "spring" }}
            className="exp"
            id="2"
            style={{ marginTop: '10px', position: 'relative' }}
          >
            <button className=" ml-3 mt-5"><CaretRightOutlined /> GenzEducateWing</button>
          </motion.div>
          <motion.div
            whileHover={{ x: -10 }} // Moves the button right by 10px
            transition={{ type: "spring" }}
            className="exp"
            id="2"
            style={{ marginTop: '10px', position: 'relative' }}
          >
            <button className=" ml-3 mt-5"><CaretRightOutlined /> CodSoft</button>
          </motion.div>
        </div>
      </div>
        <div className="projects font-kanit mt-20 ml-32 mr-32">
          <div className="project-container ">
            <div ref={projectListRef} className="project-list-wrapper">
              {/* Single instance of the project list */}
              <div className="project-list ">
                {Object.values(projects).map((project, index) => (
                  <motion.div
                    key={index}
                    className="project-card flex flex-col items-center p-4 border rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{  scale: 1.1 }}
                    whileInView={{opacity:1, scale:1}}
                    transition={{ duration: 0.5 }}
                  >
                    <a href={project.link}>
                      <img className="h-40" src={project.image} alt={project.name} />
                      <p className="mt-2">{project.name}</p>
                    </a>
                  </motion.div>
                ))}
              </div>
              {/* Repeat the list for continuous scroll */}
              <div className="project-list ml-10">
                {Object.values(projects).map((project, index) => (
                  <motion.div
                    key={index + Object.values(projects).length} // Adjust key for repetition
                    className="project-card flex flex-col items-center p-4 border rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{  scale: 1.1 }}
                    whileInView={{opacity:1, scale:1}}
                    transition={{ duration: 0.5 }}
                  >
                    <a href={project.link}>
                      <img className="h-40" src={project.image} alt={project.name} />
                      <p className="mt-2">{project.name}</p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        <div className="mt-8 flex justify-end view_all">
          <button onClick={() => router.push('/projects')}>View All Projects <ArrowRightOutlined /></button>
        </div>
      </div>
      <div className="GetInTouch font-kanit mt-96  " id="contact">
        <h1 className="name ">GET IN TOUCH</h1>
        <div className="links">
          <div className="list1">
            <button className="links" onClick={handleCopyEmail}>Mail Id <MailOutlined /></button>
            <button
              className="links"
              onClick={() => handleLinkNavigation("https://linkedin.com/in/kalki-siva")}
            >
              LinkedIn <LinkedinOutlined />
            </button>
          </div>
          <div className="list2">
            <button
              className="links"
              onClick={() => handleLinkNavigation("https://github.com/Sivakalki")}
            >
              GitHub <GithubOutlined />
            </button>
            <button
              className="links"
              onClick={() => handleLinkNavigation("https://x.com/PusarlaSiv67661?t=B1HtQWs-PSCfrMFJxWHXog&s=09")}
            >
              X (Twitter) <TwitterOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
