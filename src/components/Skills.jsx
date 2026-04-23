import React from "react";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const Skills = () => {
  return (
    <div id="skills" className="skills-carousel">
      <div className="caro-head">
        <h1>SKILLS</h1>
      </div>
      <Swiper
        className="carousel-auto"
        modules={[FreeMode, Autoplay]}
        spaceBetween={30}
        slidesPerView={9}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={2000}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        <SwiperSlide>
          <div className="skill-item html">
            <FaHtml5 />
            <span>HTML</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill-item css">
            <FaCss3Alt />
            <span>CSS3</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill-item javascript">
            <FaJs />
            <span>JavaScript</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill-item react">
            <FaReact />
            <span>React.js</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill-item tailwind">
            <SiTailwindcss />
            <span>Tailwind CSS</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill-item git">
            <FaGitAlt />
            <span>Git</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill-item github">
            <FaGithub />
            <span>Github</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill-item node">
            <FaNodeJs />
            <span>Node.js</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill-item express">
            <SiExpress />
            <span>Express.js</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill-item mongodb">
            <SiMongodb />
            <span>MongoDB</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill-item vscode">
            <VscVscode />
            <span>VsCode</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Skills;
