import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/images/1.png",
      gLink: "https://github.com/MuhamadArhum",
      lLink: "https://www.linkedin.com/in/muhamad-arhum-5423aa198/",
      description: "Project 1 is a comprehensive digital health solution designed to help users manage their health and wellness effectively. It serves as a virtual assistant, providing personalized health recommendations, tracking vital health metrics, and offering insights to promote a healthier lifestyle.",
    },
    {
      title: "Project 2",
      img: "/images/2.png",
      gLink: "https://github.com/MuhamadArhum",
      lLink: "https://www.linkedin.com/in/muhamad-arhum-5423aa198/",
      description: "Project 2 is an e-commerce platform that offers users a seamless shopping experience with advanced search features, personalized recommendations, and secure payment options.",
    },
    {
      title: "Project 3",
      img: "/images/3.png",
      gLink: "https://github.com/MuhamadArhum",
      lLink: "https://www.linkedin.com/in/muhamad-arhum-5423aa198/",
      description: "Project 3 is a task management app that helps users stay organized by allowing them to create, edit, and prioritize tasks efficiently.",
    },
    {
      title: "Project 4",
      img: "/images/4.png",
      gLink: "https://github.com/MuhamadArhum",
      lLink: "https://www.linkedin.com/in/muhamad-arhum-5423aa198/",
      description: "Project 4 is a social networking platform that connects users based on their interests and hobbies, enabling them to share content, join groups, and participate in discussions.",
    },
    {
      title: "Project 5",
      img: "/images/5.png",
      gLink: "https://github.com/MuhamadArhum",
      lLink: "https://www.linkedin.com/in/muhamad-arhum-5423aa198/",
      description: "Project 5 is a mobile fitness app that provides personalized workout plans, nutrition tracking, and progress monitoring to help users achieve their fitness goals.",
    },
    {
      title: "Project 6",
      img: "/images/6.png",
      gLink: "https://github.com/MuhamadArhum",
      lLink: "https://www.linkedin.com/in/muhamad-arhum-5423aa198/",
      description: "Project 6 is an educational platform that offers online courses, interactive quizzes, and certification programs to help users enhance their skills and knowledge.",
    },
  ]);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/MuhamadArhum"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
