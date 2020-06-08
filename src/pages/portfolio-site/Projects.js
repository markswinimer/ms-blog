import React, { Component } from 'react';
import { FaGithub, FaEye } from 'react-icons/fa';
import { StyledProjects, ProjectCard, ProjectCardTags, ProjectCardLinks, ProjectsGrid } from './Projects.styled';

class Projects extends Component {
    render() {
        return (
            <StyledProjects>
                <h1>Projects</h1>
                <h2>What I'm working on</h2>
                <p>I'm currently working on React applications like the <strong>color picker</strong>, which is created alongside a tutorial. I am also looking forward to these planned personal projects: <strong>movie guessing game</strong>, <strong>personal blog</strong> and a <strong>text adventure in React</strong></p>
                <ProjectsGrid>

                    <ProjectCard>
                        <h2>UIE Landing Page</h2>
                            <p>Static landing page design for my internship at UIE. I lead and implemented the code and design.</p>
                        <ProjectCardLinks>
                            <a href="github.com/markswinimer"><FaGithub className="icon"/></a>
                            <a href={"nerd-words.herokuapp.com"}><FaEye className="icon"/></a>
                            <ProjectCardTags>
                                <h4>Ruby</h4>
                                <h4>Rails</h4>
                                <h4>React</h4>
                            </ProjectCardTags>
                        </ProjectCardLinks>
                    </ProjectCard>

                    <ProjectCard>
                            <h2>Nerd Words</h2>
                            <p>Static landing page design for my internship at UIE. I lead and implemented the code and design.</p>
                        <ProjectCardLinks>
                                <a href="github.com/markswinimer"><FaGithub className="icon"/></a>
                                <a href={"uie.com"}><FaEye className="icon"/></a>
                            <ProjectCardTags>
                                <h4>Ruby</h4>
                                <h4>Rails</h4>
                                <h4>React</h4>
                            </ProjectCardTags>
                        </ProjectCardLinks>
                        </ProjectCard>
                </ProjectsGrid>

            </StyledProjects>
        )
    }
}
export default Projects;
